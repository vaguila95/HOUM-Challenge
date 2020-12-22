import { Card, Col, Divider, Image, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";
import "./pokemonCard.less"
import HPIcon from "../../assets/images/hp.png";
import AttackIcon from "../../assets/images/attack.png";
import DefenseIcon from "../../assets/images/defense.png";
import SpeedIcon from "../../assets/images/speed.png";
import ShinyOnIcon from "../../assets/images/starOn.png";
import ShinyOffIcon from "../../assets/images/starOff.png";

const PokemonCard = (props) => {
  const { pokemonData } = props;
  const [info, setInfo] = useState();
  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(pokemonData.url);
      const  data = await response.json();
      setInfo(data);
    }
    fetchData()
      .catch(err => { console.log(err) });

    // eslint-disable-next-line
  }, [])

  const cardContent = () => {
    if (info) {
      let hp;
      let attack;
      let defense;
      let speed;
      info.stats.forEach(stat => {
        if (stat.stat.name === "hp") {
          hp = stat.base_stat;
        }
        if (stat.stat.name === "attack") {
          attack = stat.base_stat;
        }
        if (stat.stat.name === "defense") {
          defense = stat.base_stat;
        }
        if (stat.stat.name === "speed") {
          speed = stat.base_stat;
        }
      });

      const weight = parseInt(info.weight) / 10
      const attributeRowStyles = { 
          border: "1px solid #ff7e14",
          borderRadius: "4px 0px 0px 4px",
          width: "118%",
          height: 25,
          marginBottom: 4
        }

      return (
        <div className="pokemon-card">
          <Row style={{ height: 30 }}>
            <Col span={3}>#{info.id}</Col>
            <Col span={15} align="center"><p className="pokemon-card-name">{info.name.toUpperCase()}</p></Col>
            <Col span={4} offset={2} align="center">
              {
              shiny ? 
              <Image src={ShinyOnIcon} onClick={() => setShiny(!shiny)} width={15} preview={false}/> : 
              <Image src={ShinyOffIcon} onClick={() => setShiny(!shiny)} width={15} preview={false}/>
              }
            </Col>
          </Row>

          <Row align="middle">
            <Col span={18} align="center">
              <Image src={shiny ? info.sprites.front_shiny : info.sprites.front_default} alt="" height={100}/>
            </Col>
            <Col span={6}>
              <Row align="middle" style={attributeRowStyles}>
                <Col span={8} offset={4}><Image src={HPIcon} width={10} /></Col><Col>{hp}</Col>
              </Row>
              <Row align="middle" style={attributeRowStyles}>
                <Col span={8} offset={4}><Image src={AttackIcon} width={10} /></Col><Col>{attack}</Col>
              </Row>
              <Row align="middle" style={attributeRowStyles}>
                <Col span={8} offset={4}><Image src={DefenseIcon} width={10} /></Col><Col>{defense}</Col>
              </Row>
              <Row align="middle" style={attributeRowStyles}>
                <Col span={8} offset={4}><Image src={SpeedIcon} width={10} /></Col><Col>{speed}</Col>
              </Row>
            </Col>
          </Row>

          <Row align="middle" style={{ marginTop: 5 }}>
            <Col span={7} align="center">
              <p style={{ fontWeight: 'bold', margin: 0 }}>{weight} kg</p>
            </Col>

            <Divider type="vertical" style={{ margin: 0, height: 20, color: "#ff7e14" }}/>
            <Col span={9} align="center">
              <div >
                {info.types.map(type => (
                  <p key={type.type.name} style={{ margin: 0 }}>{type.type.name}</p>
                  ))}
              </div>
            </Col>
            <Divider type="vertical" style={{ margin: 0, height: 20, color: "#ff7e14" }}/>

            <Col span={7} align="center">
              <p style={{ fontWeight: 'bold', margin: 0  }}> {info.height}0 cm</p>
            </Col>
          </Row>

          <Divider style={{ margin: 5, color: "#ff7e14" }}/>
          {info.abilities.map(ability => (
            <Row>
              <Col span={12} offset={3}>{ability.ability.name}:</Col> 
              <Col>{ability.slot}</Col></Row>
          ))}
        </div>
      )
    }
    else {
      return (
        <Skeleton active />
      )
    }
  }

  return(
    <Card
      hoverable
      style={{ width: 220, height: 300, borderRadius: 10}}
      bodyStyle={{padding: 8, height: '100%'}}
    >
      {cardContent()}
    </Card>
  )
}

export default PokemonCard;
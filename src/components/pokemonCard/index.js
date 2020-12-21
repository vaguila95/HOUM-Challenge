import { Card, Col, Divider, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";

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
    fetchData();

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
          width: "114%",
          height: 20,
          marginBottom: 3
        }

      return (
        <div className="pokemon-card">
          <Row style={{ height: 20 }}>
            <Col span={4}>#{info.id}</Col>
            <Col span={4} offset={16}><span onClick={() => setShiny(!shiny)}>shiny</span></Col>
          </Row>

          <Row align="middle">
            <Col span={16}>
              <img src={shiny ? info.sprites.front_shiny : info.sprites.front_default} alt=""/>
            </Col>
            <Col span={8}>
              <Row align="middle" style={attributeRowStyles}>
                <Col span={8} offset={2}>hp:</Col><Col>{hp}</Col>
              </Row>
              <Row align="middle" style={attributeRowStyles}>
                <Col span={8} offset={2}>atk:</Col><Col>{attack}</Col>
              </Row>
              <Row align="middle" style={attributeRowStyles}>
                <Col span={8} offset={2}>def:</Col><Col>{defense}</Col>
              </Row>
              <Row align="middle" style={attributeRowStyles}>
                <Col span={8} offset={2}>sp:</Col><Col>{speed}</Col>
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
      style={{ width: 200, height: 240 }}
      bodyStyle={{padding: 8, height: '100%'}}
    >
      {cardContent()}
    </Card>
  )
}

export default PokemonCard;
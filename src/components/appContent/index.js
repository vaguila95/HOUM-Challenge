import PokemonCard from '../pokemonCard'
import { useEffect, useState } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';
import Button from 'antd/lib/button';
import {
  DownOutlined
} from '@ant-design/icons';

const AppContent = (props) => {
  const { filteredTypes } = props;
  const [pokemonOffset, setPokemonOffset] = useState(0)
  const [pokemonData, setPokemonData] = useState([]);
  // const [pokemonCache, setPokemonCache] = useState({});
  // const [pokemonRegistry, setPokemonRegistry] = useState({});

  // manage pokemonOffset change
  useEffect(() => {
    if (filteredTypes.length === 0) {
      const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonOffset}`);
        const data = await response.json();
        setPokemonData(pokemonData.concat(data.results));
      }
      fetchData().catch(err => { console.log(err) });
    }
      
    // console.log(`pokemonOffset update. offset = ${pokemonOffset}`);
    // eslint-disable-next-line
  }, [pokemonOffset])


  // manage when filteredTypes has changed.
  useEffect(() => {
    if (filteredTypes.length !== 0) {
      setPokemonData([]);
      const fetchData = async (type) => {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        return data.pokemon
      }  

      const incomingData = []
      filteredTypes.forEach(type => {
        incomingData.push(fetchData(type));
      })
      Promise.all(incomingData)
        .then(values => { setPokemonData(...values) })
        .catch(err => { console.log(err) });

    } else {
      setPokemonOffset(0);
      const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonOffset}`);
        const data = await response.json();
        setPokemonData(data.results);
      }
      fetchData()
        .catch(err => { console.log(err) })
    }

    //console.log(`Filtered types update. Data length: ${pokemonData.length}`);
    // eslint-disable-next-line
  }, [filteredTypes])


  const Cards = () => { 
    return (pokemonData.map(data => {
      let parsedData = data.pokemon ? data.pokemon : data;
      return (<Col key={parsedData.name}><PokemonCard pokemonData={parsedData} /></Col>)
    }))
  }


  return (
    <Content
      style={{ 
        width: '100%',
        padding: 20,
        justifyContent: 'center'
      }}
    >
      <Row 
        key={1}
        gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
        justify="space-around"
      >
        { Cards() }
      </Row>
      <Row key={2}>
        <Col align="center" span={24}>
          <Button type="primary" onClick={() => {setPokemonOffset(pokemonOffset + 20)}}><DownOutlined /></Button>
        </Col>
      </Row>      
    </Content>
  )
}

export default AppContent
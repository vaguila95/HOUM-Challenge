import PokemonCard from '../pokemonCard'
import { useEffect, useState } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';

const AppContent = (props) => {
  const { filteredTypes } = props;
  const [pokemonOffset, setPokemonOffset] = useState(0)
  const [cardCount, setCardCount] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonCache, setPokemonCache] = useState({});
  const [pokemonRegistry, setPokemonRegistry] = useState({});

  useEffect(() => {
    // if (0 === filteredTypes.length && pokemonData.length < pokemonOffset + 20) {
    //   const fetchData = async () => {
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonOffset}`);
    //     const data = await response.json();
    //     setPokemonData(pokemonData.concat(data.results));
    //   }
    //   fetchData();
      
    // } else if (filteredTypes.length !== 0) {
    //   setPokemonData([]);
    //   console.log(`Array should be empty. Data length: ${pokemonData.length}`);
    //   const fetchData = async (type) => {
    //     const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    //     const data = await response.json();
    //     setPokemonData([...pokemonData, ...data.pokemon]);
    //   }  
    //   filteredTypes.forEach(type => {
    //     fetchData(type);
    //   })  
      
    // }  
    // console.log(`pokemonOffset update. Data length: ${pokemonData.length}`);
    // eslint-disable-next-line
  }, [pokemonOffset])

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
      Promise.all(incomingData).then(values => {
        setPokemonData(...values);
      });
    } else {
      const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonOffset}`);
        const data = await response.json();
        setPokemonData(data.results);
      }
      fetchData();
    }

    // console.log(`Filtered types update. Data length: ${pokemonData.length}`);
    // eslint-disable-next-line
  }, [filteredTypes])


  const Cards = () => { 
    return (pokemonData.map(data => {

      let parsedData = data.pokemon ? data.pokemon : data;
      return (<Col><PokemonCard key={parsedData.name} pokemonData={parsedData} /></Col>)
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
        gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
        justify="space-around"
      >
        { Cards() }
      </Row>
    </Content>
  )
}

export default AppContent
import PokemonCard from '../pokemonCard'
import { useEffect, useState } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';

const AppContent = () => {
  const [pokemonOffset, setPokemonOffset] = useState(0)
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonOffset}`);
      const data = await response.json();
      setPokemonData([...pokemonData, ...data.results]);
    }
    fetchData();

    // eslint-disable-next-line
  }, [pokemonOffset])

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
        justify="space-between"
      >
        {pokemonData.map((pokemonData) => (
          <Col>
            <PokemonCard key={pokemonData.name} pokemonData={pokemonData} />
          </Col>
        ))}
      </Row>
    </Content>
  )
}

export default AppContent
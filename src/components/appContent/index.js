import PokemonCard from '../pokemonCard'
import { useEffect, useState } from 'react';
import { Content } from 'antd/lib/layout/layout';

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
  }, [pokemonData, pokemonOffset])

  return (
    <Content>
      {pokemonData.map((pokemonData) => (
        <PokemonCard key={pokemonData.id} data={pokemonData} />
        ))}
    </Content>
  )
}

export default AppContent
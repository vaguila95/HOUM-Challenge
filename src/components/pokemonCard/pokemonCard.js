import { useEffect, useState } from "react";

const PokemonCard = (props) => {
  const { id } = props; 
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonData(data);
    }
    fetchData();
  }, [])

  useEffect(() => {

  }, [pokemonData])

  const cardContent = () => {
    if (pokemonData) {
      return (
        <h1>#{id} {pokemonData.name}</h1>
      )
    }
    else {
      return (
        <h1>Loading...</h1>
      )
    }
  }

  return(
    <div>
      {cardContent()}
    </div>
  )
}

export default PokemonCard;
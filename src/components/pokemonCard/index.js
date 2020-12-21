import { Card, Skeleton } from "antd";
import { useEffect, useState } from "react";

const PokemonCard = (props) => {
  const { pokemonData } = props;
  const [info, setInfo] = useState()

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
      return (
        <div>
          <p>#{info.id}</p>
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
      title={pokemonData.name}
      style={{ width: 200, height: 300, display: 'flex' }}
    >
      {cardContent()}
    </Card>
  )
}

export default PokemonCard;
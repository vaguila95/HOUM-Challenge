import { Skeleton } from "antd";

const PokemonCard = (props) => {
  const { data } = props; 

  const cardContent = () => {
    if (data) {
      return (
        <h1>#{data.id} {data.name}</h1>
      )
    }
    else {
      return (
        <Skeleton active />
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
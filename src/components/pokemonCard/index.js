import { Card, Skeleton } from "antd";

const PokemonCard = (props) => {
  const { data } = props;

  const cardContent = () => {
    if (data) {
      return (
        <h1>Le content</h1>
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
      title={data.name}
      style={{ width: 200, height: 300 }}
    >
      {cardContent()}
    </Card>
  )
}

export default PokemonCard;
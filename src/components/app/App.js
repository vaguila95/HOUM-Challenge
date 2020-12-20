import { Button } from 'antd';
import './App.css';
import PokemonCard from '../pokemonCard/pokemonCard'

const App = () => {

  const idArray = []
  const pageSize = 120
  let auxId = 1
  while (idArray.length < pageSize) {
    idArray.push(auxId)
    auxId += 1;
  }

  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <h1>PokeCards</h1>
      {idArray.map((pokemonId) => (
        <PokemonCard key={pokemonId} id={pokemonId} />
      ))}
    </div>
  );
}

export default App;

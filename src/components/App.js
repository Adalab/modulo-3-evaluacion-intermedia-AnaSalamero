import React, { useState } from 'react';
import data from '../data/data.json';
import PokeList from './PokeList';

import '../stylesheets/App.scss';

function App() {
  const [pokemonList] = useState(data);

  return <PokeList pokemonList={pokemonList} />;
}

export default App;

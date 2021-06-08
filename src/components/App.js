import data from '../data/data.json';
import PokeList from './PokeList';

import '../stylesheets/App.scss';

function App() {
  //console.log(data);
  return <PokeList dataPok={data} />;
}

export default App;

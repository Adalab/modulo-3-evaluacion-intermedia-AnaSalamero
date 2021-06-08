import Pokemon from './Pokemon';

function PokeList(props) {
  const listItems = props.pokemonList.map((item) => {
    return (
      <li key={item.id}>
        <Pokemon item={item} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export default PokeList;

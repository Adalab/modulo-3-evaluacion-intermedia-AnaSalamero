import Pokemon from './Pokemon';

function PokeList(props) {
  const listItems = props.pokemonList.map((item) => {
    return (
      <li className="list_item" key={item.id}>
        <Pokemon item={item} />
      </li>
    );
  });
  return <ul className="list">{listItems}</ul>;
}

export default PokeList;

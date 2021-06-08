import Pokemon from './Pokemon';

function PokeList(props) {
  //console.log(props);
  const listItems = props.dataPok.map((item) => {
    return (
      <li key={item.id}>
        <Pokemon item={item} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export default PokeList;

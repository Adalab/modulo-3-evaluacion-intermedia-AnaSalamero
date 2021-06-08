function Pokemon(props) {
  return (
    <>
      <img src={props.item.url} alt={props.item.name}></img>
      <p>{props.item.name}</p>
      <p>{props.item.types[0]}</p>
      <p>{props.item.types[1]}</p>
    </>
  );
}

export default Pokemon;

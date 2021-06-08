function Pokemon(props) {
  return (
    <>
      <img src={props.item.url} alt={props.item.name}></img>
      <p className="title">{props.item.name}</p>
      <p className="subtitle">{props.item.types[0]}</p>
      <p className="subtitle">{props.item.types[1]}</p>
    </>
  );
}

export default Pokemon;

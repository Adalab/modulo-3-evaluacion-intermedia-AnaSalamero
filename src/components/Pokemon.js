import PropTypes from 'prop-types';

function Pokemon(props) {
  const pokesublist = props.item.types.map((type) => {
    console.log(props);
    return (
      <p className="subtitle" key={(props.item.id, type)}>
        {type}
      </p>
    );
  });

  return (
    <>
      <img src={props.item.url} alt={props.item.name}></img>
      <p className="title">{props.item.name}</p>
      {pokesublist}
    </>
  );
}

Pokemon.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    evolution: PropTypes.string,
  }),
};

export default Pokemon;

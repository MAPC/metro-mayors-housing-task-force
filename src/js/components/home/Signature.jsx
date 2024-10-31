const Signature = ({ title, name, municipality }) => {
  return (
    <img
      className="component Signature"
      alt={`Signature of ${title} ${name} from ${municipality}`}
      src={`/assets/images/${municipality.toLowerCase()}-signature.svg`}
    />
  );
};

export default Signature;

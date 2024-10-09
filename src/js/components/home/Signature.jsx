const Signature = ({ title, name, municipalityName }) => {
  return (
    <img
      className="component Signature"
      alt={`Signature of ${title} ${name} from ${municipalityName}`}
      src={`/assets/images/${municipalityName.toLowerCase()}-signature.svg`}
    />
  );
};

export default Signature;

import Principle from "./Principle";

const ImagePrinciple = ({ principle, number }) => {
  return (
    <div className="component ImagePrinciple">
      <div className="image-wrapper">
        <img src={`/assets/images/${principle.image}`} />
      </div>

      <Principle number={number} principle={principle} />
    </div>
  );
};

export default ImagePrinciple;

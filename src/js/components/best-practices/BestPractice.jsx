const BestPractice = ({ practice: { title, overview, image }, onClick }) => {
  return (
    <div className="component BestPractice" onClick={onClick}>
      <div className="best-practice-description">
        <h4>{title}</h4>
        <p>{overview}</p>
      </div>
      <div className="best-practice-image">
        <img src={`/assets/images/${image}`} />
      </div>
    </div>
  );
};

export default BestPractice;

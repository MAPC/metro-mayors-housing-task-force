const Principle = ({ principle: { title, content }, number }) => {
  return (
    <div className="component Principle">
      <h3>
        {number}. {title}
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default Principle;

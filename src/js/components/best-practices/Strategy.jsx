const Strategy = ({ selected, onClick, title }) => {
  return (
    <button className={`component Strategy ${selected ? "selected" : ""}`} onClick={() => onClick()}>
      {title}
    </button>
  );
};

export default Strategy;

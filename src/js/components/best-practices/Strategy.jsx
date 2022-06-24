import React from 'react';


const Strategy = (props) => {
  return (
    <button
      className={`component Strategy ${props.selected ? 'selected' : ''}`}
      onClick={() => props.onClick()}
    >
      {props.title}
    </button>
  );
}

Strategy.propTypes = {
};

export default Strategy;

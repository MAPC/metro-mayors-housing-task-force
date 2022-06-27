import React from 'react';

const Principle = (props) => {

  const { title, content } = props.principle;

  return (
    <div className="component Principle">
      <h3>{props.number}. {title}</h3>
      <p>
        {content}
      </p>
    </div>
  );

}

export default Principle;

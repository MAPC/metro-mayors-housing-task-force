import React from 'react';
import PropTypes from 'prop-types';

const BestPractice = (props) => {

    const { title, overview, image } = props.practice;

  return (
    <div className="component BestPractice" onClick={props.onClick}>
      <div className="best-practice-description">
        <h4>{title}</h4>
        <p>{overview}</p>
      </div>
      <div className="best-practice-image">
        <img src={`/assets/images/${image}`} />
      </div>
    </div>
  );
}

BestPractice.propTypes = {
  practice: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default BestPractice;

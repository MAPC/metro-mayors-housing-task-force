import React from 'react';
import PropTypes from 'prop-types';

class BestPractice extends React.Component {

  render() {
    const { title, overview, image } = this.props.practice;

    return (
      <div className="component BestPractice">
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
}

BestPractice.propTypes = {
};

export default BestPractice;

import React from 'react';
import PropTypes from 'prop-types';

class BestPractice extends React.Component {
  render() {
    return (
      <div className="component BestPractice">
        <div className="best-practice-description">
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
        <div className="best-practice-image">
          <img src={`/assets/images/${this.props.image}`} />
        </div>
      </div>
    );
  }
}

BestPractice.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BestPractice;

import React from 'react';
import PropTypes from 'prop-types';

class BackButton extends React.Component {
  render() {
    return (
      <button
        className='component BackButton'
        onClick={() => this.props.onBackwardClick()}
      >
        {"<"}
      </button>
    )
  }
}

BackButton.propTypes = {
};

export default BackButton;

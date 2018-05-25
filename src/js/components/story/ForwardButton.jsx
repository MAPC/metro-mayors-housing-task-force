import React from 'react';
import PropTypes from 'prop-types';

class ForwardButton extends React.Component {
  render() {
    return (
      <button
        className='component ForwardButton'
        onClick={() => this.props.onForwardClick()}
      >
        {">"}
      </button>
    )
  }
}

ForwardButton.propTypes = {
};

export default ForwardButton;

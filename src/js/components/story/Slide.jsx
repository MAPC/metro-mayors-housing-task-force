import React from 'react';
import PropTypes from 'prop-types';

import ForwardButton from './ForwardButton.jsx';
import BackButton from './BackButton.jsx';

class Slide extends React.Component {
  render() {
    return (
      <div className="component Slide" id={'slide-number-' + this.props.slideIndex}>
        <h1>{this.props.slide.text}</h1>
        <BackButton
          onBackwardClick={() => this.props.onBackwardClick()}
        />
        <ForwardButton
          onForwardClick={() => this.props.onForwardClick()}
        />
      </div>
    )
  }
}

Slide.propTypes = {
};

export default Slide;

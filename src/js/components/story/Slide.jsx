import React from 'react';
import PropTypes from 'prop-types';

import ForwardButton from './ForwardButton.jsx';
import BackButton from './BackButton.jsx';

class Slide extends React.Component {
  render() {
    return (
      <div className="component Slide" data-slide={this.props.slideIndex}>
        <div className="slide-content container">
          <h1>{this.props.slide.text}</h1>
        </div>

        <div className="slide-controls">
          <BackButton
            onBackwardClick={() => this.props.onBackwardClick()}
          />
          <ForwardButton
            onForwardClick={() => this.props.onForwardClick()}
          />
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
};

export default Slide;

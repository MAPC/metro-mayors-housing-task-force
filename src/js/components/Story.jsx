import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Slide from './story/Slide.jsx';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
    this.slides = [{
      text: 'Slide 1 We Hold These Truths',
    }, {
      text: 'Slide 2 To Be Self Evident',
    }, {
      text: 'Slide 3 That All Men are Created Equal',
    }, {
      text: 'Slide 4 I Have a Dream',
    }, {
      text: 'Slide 5 That One Day Everyone',
    }, {
      text: 'Slide 6 Will Be Able to Afford Housing',
    }, {
      text: 'Slide 7 In Metro Boston',
    }, {
      text: 'Slide 8 This site is one small step for Boston',
    }, {
      text: 'Slide 9 and one giant leap for America',
    }, {
      text: 'Slide 10 We have nothing to fear',
    }, {
      text: 'Slide 11 But Fear Itself',
    }, {
      text: 'Slide 12 Some Test Text',
    }, {
      text: 'Slide 13 More Test Text',
    }, {
      text: 'Slide 14 Do not stop believing',
    }, {
      text: 'Slide 15 Do not back down',
    }];
  }

  handleForwardClick() {
    if(this.state.currentSlide < 14) {
      this.setState({currentSlide: this.state.currentSlide + 1});
    }
  }

  handleBackwardClick() {
    if(this.state.currentSlide > 0) {
      this.setState({currentSlide: this.state.currentSlide - 1});
    }
  }

  render() {
    return (
      <main className="component Story">
        <Slide
          slide={this.slides[this.state.currentSlide]}
          slideIndex={this.state.currentSlide}
          onForwardClick={() => this.handleForwardClick()}
          onBackwardClick={() => this.handleBackwardClick()}
        />
      </main>
    );
  }
}

Story.propTypes = {
};

export default Story;
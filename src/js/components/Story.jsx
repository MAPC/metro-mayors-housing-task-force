import React from 'react';

import Header from './Header';
import Slide from './story/Slide.jsx';
import slides from '~/_data/slides';

let lastSlide = 22;

class Story extends React.Component {

  constructor() {
    super(...arguments);

    this.back = this.back.bind(this);
    this.forward = this.forward.bind(this);
    this.arrowControls = this.arrowControls.bind(this);

    this.state = {
      currentSlide: lastSlide,
    };
  }

  hasNext() {
    return this.state.currentSlide < slides.length - 1;
  }

  hasPrevious() {
    return this.state.currentSlide > 0;
  }

  forward() {
    if (this.hasNext()) {
      lastSlide = this.state.currentSlide + 1;
      this.setState({ currentSlide: lastSlide });
    }
    else {
      this.props.history.push('/strategies');
    }
  }

  back() {
    if (this.hasPrevious()) {
      lastSlide = this.state.currentSlide - 1;
      this.setState({ currentSlide: lastSlide });
    }
  }

  arrowControls({ keyCode }) {
    if (keyCode === 37) {
      this.back();
    }
    else if (keyCode === 39) {
      this.forward();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.arrowControls);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.arrowControls);
  }

  renderSlides() {
    return slides.map((slide, i) => {
      return (
        <Slide
          key={`${i}-${slide.content[0].text}`}
          active={i === this.state.currentSlide}
          slide={slide}
        />
      );
    });
  }

  render() {
    const slide = slides[this.state.currentSlide];

    return (
      <main className="component Story">
        <Header
          light={!slide.darkHeader}
          color={slide.headerColor}
          shadowed={slide.headerShadow}
        />

        {this.renderSlides()}

        <button className={`slide-control ${slide.darkHeader ? 'dark' : ''} ${!this.hasPrevious() ? 'disabled' : ''}`} onClick={() => this.back()}></button>
        <button className={`slide-control ${slide.darkHeader ? 'dark' : ''}`} onClick={() => this.forward()}></button>
      </main>
    );
  }
}

export default Story;

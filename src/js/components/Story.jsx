import React from 'react';

import Header from './Header';
import Slide from './story/Slide.jsx';
import slides from '~/_data/slides';


class Story extends React.Component {

  constructor() {
    super(...arguments);

    this.back = this.back.bind(this);
    this.forward = this.forward.bind(this);

    this.state = {
      currentSlide: 0,
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
      this.setState({ currentSlide: this.state.currentSlide + 1});
    }
    else {
      this.props.history.push('/best-practices');
    }
  }

  back() {
    if (this.hasPrevious()) {
      this.setState({ currentSlide: this.state.currentSlide - 1 });
    }
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

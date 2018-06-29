import React from 'react';
import PropTypes from 'prop-types';


class Slide extends React.Component {
  render() {
    const { title, content, image, credit, active } = this.props;

    return (
      <div className={`component Slide ${active ? 'active' : ''}`}>
        {image ? (<img src={`/assets/images/slides/${image}`} />) : ''}

        <div className="container">
          <div className="slide-content">
            {title ? (<h1>{title}</h1>) : ''}
            {content}
          </div>
        </div>

        {credit
          ? (
            <div className="slide-credits">
              {credit.location ? credit.location: ''}<br />
              {credit.artist ? `Photo: ${credit.artist}` : ''}
            </div>
          )
          : ''
        }
      </div>
    )
  }
}

Slide.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  credit: PropTypes.shape({
    location: PropTypes.string,
    artist: PropTypes.string,
  }),
};

export default Slide;

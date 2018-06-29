import React from 'react';
import PropTypes from 'prop-types';


class Slide extends React.Component {

  htmlDecode(content) {
    const elem = document.createElement('div');
    elem.innerHTML = content;
    return elem.childNodes.length === 0 ? "" : elem.childNodes[0].nodeValue;
  }

  render() {
    const { title, content, image, credit, active } = this.props;

    return (
      <div className={`component Slide ${active ? 'active' : ''}`}>
        <div className="image-wrapper">
          {image ? (<img src={`/assets/images/slides/${image}`} />) : ''}
        </div>

        <div className="container">
          <div className="slide-content">
            {title ? (<h1>{title}</h1>) : ''}
            <div dangerouslySetInnerHTML={{ __html: this.htmlDecode(content) }} />
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

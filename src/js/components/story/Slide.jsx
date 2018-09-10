import React from 'react';
import PropTypes from 'prop-types';


class Slide extends React.Component {

  htmlDecode(content) {
    const elem = document.createElement('div');
    elem.innerHTML = content;
    return elem.childNodes.length === 0 ? "" : elem.childNodes[0].nodeValue;
  }

  renderContent() {
    const { content } = this.props.slide;

    return content.map(block => (
      block.link
      ? (
        <a key={block.text.slice(0,8)} href={block.link} className={`content-block ${(block.style || []).join(' ')}`}>
          <span dangerouslySetInnerHTML={{__html: this.htmlDecode(block.text)}} />
        </a>
      )
      : (
        <div key={block.text.slice(0,8)} className={`content-block ${(block.style || []).join(' ')}`}>
          <span dangerouslySetInnerHTML={{__html: this.htmlDecode(block.text)}} />
        </div>
      )
    ));
  }

  render() {
    const { background, image, credit } = this.props.slide;
    const isImage = (background || '').indexOf('.') !== -1;

    return (
      <div className={`component Slide ${this.props.active ? 'active' : ''} ${!isImage ? background : ''}`}>
        {isImage
          ? (
            <div className="image" style={{backgroundImage: `url('/assets/images/slides/${background}')`}}>
              <img src={`/assets/images/slides/${background}`} />
            </div>
          )
          : null
        }

        <div className="container">
          <div className="slide-content">{this.renderContent()}</div>

          {image
            ? <img className="slide-image" src={`/assets/images/slides/${image}`} />
            : null
          }
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
  slide: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      style: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.string,
    })),
    background: PropTypes.string,
  }),
  credit: PropTypes.shape({
    location: PropTypes.string,
    artist: PropTypes.string,
  }),
};

export default Slide;

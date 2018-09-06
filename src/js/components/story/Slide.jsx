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
      ? <a href={block.link} className={`content-block ${(block.style || []).join(' ')}`} dangerouslySetInnerHTML={{__html: this.htmlDecode(block.text)}} />
      : <p className={`content-block ${(block.style || []).join(' ')}`} dangerouslySetInnerHTML={{__html: this.htmlDecode(block.text)}} />
    ));
  }

  render() {
    const { background, credit } = this.props.slide;
    const isImage = (background || '').indexOf('.') !== -1;

    return (
      <div className={`component Slide ${this.props.active ? 'active' : ''} ${!isImage ? background : ''}`}>

        <div className="image-wrapper">
          {isImage ? (<img src={`/assets/images/slides/${background}`} />) : ''}
        </div>

        <div className="container">
          <div className="slide-content">{this.renderContent()}</div>
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

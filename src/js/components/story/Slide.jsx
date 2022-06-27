import React from 'react';
import PropTypes from 'prop-types';


const Slide = (props) => {

  const htmlDecode = (content) => {
    const elem = document.createElement('div');
    elem.innerHTML = content;
    return elem.childNodes.length === 0 ? "" : elem.childNodes[0].nodeValue;
  };

  const renderContent = () => {
    const { content } = props.slide;

    return content.map((block,i) => (
      block.link
      ? (
        <a key={`${i}-${block.text.slice(0,8)}`} href={block.link} target="_blank" className={`content-block ${(block.style || []).join(' ')}`}>
          <span dangerouslySetInnerHTML={{__html: htmlDecode(block.text)}} />
        </a>
      )
      : (
        <div key={`${i}-${block.text.slice(0,8)}`} className={`content-block ${(block.style || []).join(' ')}`}>
          <span dangerouslySetInnerHTML={{__html: htmlDecode(block.text)}} />
        </div>
      )
    ));
  }

    const { background, image, credit } = props.slide;
    const isImage = (background || '').indexOf('.') !== -1;

    return (
      <div className={`component Slide ${props.active ? 'active' : ''} ${!isImage && background ? background : ''}`}>
        {isImage
          ? (
            <div className="image" style={{backgroundImage: `url('/assets/images/slides/${background}')`}}>
              <img src={`/assets/images/slides/${background}`} />
            </div>
          )
          : null
        }

        <div className="container">
          <div className="slide-content">{renderContent()}</div>

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

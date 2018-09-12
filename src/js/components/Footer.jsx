import React from 'react';


class Footer extends React.Component {

  render() {
    return (
      <footer className="component Footer">
        <div className="container">
          <img className="mapc-logo" src="/assets/images/mapc-logo.svg" alt="MAPC Logo" />

          <ul className="contact-list">
            <li>
              <a href="https://goo.gl/maps/5GP7YcEtS1E2">
                60 Temple Place<span className="break">,</span> Boston, MA 02111
              </a>
            </li>
            <li>
              <a href="tel:617-933-0700">
                617-933-0700
              </a>
            </li>
            <li>
              <a href="mailto:housingtaskforce@mapc.org">
                housingtaskforce@mapc.org
              </a>
            </li>
          </ul>

          <div className="blank-grid-cell"></div>

          <div className="social">
            Follow MAPC:
            <ul className="social-list">
              <li>
                <a href="https://twitter.com/MAPCMetroBoston" target="_blank">
                  <img src="/assets/images/twitter.svg" alt="MAPC on Twitter" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/mapcmetroboston" target="_blank">
                  <img src="/assets/images/instagram.svg" alt="MAPC on Instagram" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/MAPCMetroBoston" target="_blank">
                  <img src="/assets/images/facebook.svg" alt="MAPC on Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;

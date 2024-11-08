const Footer = () => {
  return (
    <footer className="component Footer">
      <style>
        {`
          .sitemap-columns {
            display: flex;
            justify-content: flex-start;
          }

          .sitemap-column {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 0;
            width: 50%; /* Adjust width as needed */
          }

          .sitemap-column li {
            margin-bottom: 0.5rem;
          }

          .sitemap-column a {
            color: #007bff;
            text-decoration: none;
          }

          .sitemap-column a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="container">
        <a href="https://mapc.org">
          <img className="mapc-logo" src="/assets/images/mapc-logo.svg" alt="MAPC Logo" />
        </a>

        <ul className="contact-list">
          <li>
            <a href="https://goo.gl/maps/5GP7YcEtS1E2">
              60 Temple Place<span className="break">,</span> Boston, MA 02111
            </a>
          </li>
          <li>
            <a href="tel:617-933-0700">617-933-0700</a>
          </li>
          <li>
            <a href="mailto:housingtaskforce@mapc.org">housingtaskforce@mapc.org</a>
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
        
        <div className="sitemap">
          <h6>Site Map</h6>
          <div className="sitemap-columns">
            <ul className="sitemap-column">
              <li><a href="/">Home</a></li>
              <li><a href="/strategies">Strategies</a></li>
              <li><a href="/tracking-progress">Tracking Progress</a></li>
            </ul>
            <ul className="sitemap-column">
              <li><a href="/local-implementation-projects">Local Implementation Projects</a></li>
              <li><a href="/legislative-priorities">Legislative Priorities</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

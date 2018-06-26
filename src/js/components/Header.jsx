import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="component Header container">
        <div className="title">
          <Link to='/'>
            <img src="/assets/images/logo.svg" />
            <h1 className="unstyled">
              Metro Mayors Coalition <br /> 
              Regional Housing Task Force
            </h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/guiding-principles'}>Guiding Principles</Link></li>
            <li><Link to={'/best-practices'}>Best Practices</Link></li>
            <li><Link to={'/story'}>Story</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="component Header">
        <Link to='/'>
          <h1 className="yellow">
            <div className="subtle">Metropolitan Mayors Coalition</div>
            <div>Regional Housing Task Force</div>
            <div className="underline yellow"></div>
          </h1>
        </Link>
        <nav>
          <ul>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/about'}>Best Practices</Link></li>
            <li><Link to={'/about'}>Story</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;

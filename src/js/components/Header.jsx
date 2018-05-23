import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="component Header">
        <nav>
          <ul>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>
        <h1>Metro Mayors' Coalition on Housing</h1>
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Header extends React.Component {
  render() {
    const classes = [
      'component Header container',
      this.props.story ? 'story' : '',
      this.props.light ? 'light' : '',
      this.props.shadowed ? 'shadowed' : '',
      this.props.color ? this.props.color : '',
    ].join(' ');

    return (
      <header className={classes}>
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
            <li><Link to={'/guiding-principles'}>Principles</Link></li>
            <li><Link to={'/strategies'}>Strategies</Link></li>
            <li><HashLink to='/#methods'>Methods</HashLink></li>
            <li><Link to={'/story'}>Story</Link></li>
            <li><Link to={'/2018-compact'}>2018 Compact</Link></li>
            <li><a href="/assets/documents/MetroMayors_HousingTaskforce_TrackingProgressFindings_Phase2_Memo.pdf" target="_blank">Tracking Progress</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  story: PropTypes.bool,
  light: PropTypes.bool,
  shadowed: PropTypes.bool,
  color: PropTypes.string,
};

export default Header;

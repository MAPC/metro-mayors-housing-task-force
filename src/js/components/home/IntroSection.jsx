import React from 'react';
import PropTypes from 'prop-types';

class IntroSection extends React.Component {

  render() {

    return (
      <section className="component IntroSection">
        <div className="container">
          <h2>
            Metro Boston is in a housing crisis.
          </h2>
          <p>Meet the 15 leaders united in a landmark regional commitment to housing production.</p>
        </div>
      </section>
    );
  }
}

IntroSection.propTypes = {
};

export default IntroSection;

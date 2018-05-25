import React from 'react';
import PropTypes from 'prop-types';

class IntroSection extends React.Component {

  render() {

    return (
      <section className="component IntroSection container">
        <h2>
          About the Task Force
        </h2>
        <p>Metro Boston is experiencing a housing crisis. The rate of housing production in Massachusetts is one of the lowest in the country, even as we’ve seen increases in population and employment. Since 2010, the Commonwealth has added nearly 250,000 residents and 350,000 new jobs, while permitting only 81,000 new housing units (U.S. Census Bureau and U.S. Bureau of Labor Statistics). High demand and inadequate housing production contribute to rapidly rising home prices throughout eastern Massachusetts, so that housing here has become among the highest cost in the nation. Limited supply makes it difficult for Metro Boston residents to find housing that works for them, and for employers to retain and recruit workers. </p>
      </section>
    );
  }
}

IntroSection.propTypes = {
};

export default IntroSection;

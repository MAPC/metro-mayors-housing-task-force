import React from 'react';


class IntroSection extends React.Component {

  render() {
    return (
      <section className="component IntroSection container">
        <h1>140,000 new homes in Metro Boston</h1>
        <p>
          Meet the 15 leaders united in a landmark regional commitment to housing production.
        </p>

        <div className="header-image">
          <img src="/assets/images/header-homes.jpg" alt="Multi-family homes" />
        </div>
      </section>
    );
  }

}

export default IntroSection;

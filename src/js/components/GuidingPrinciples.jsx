import React from 'react';

import PrinciplesSection from './guiding-principles/PrinciplesSection';


class GuidingPrinciples extends React.Component {

  render() {
    return (
      <main className="component GuidingPrinciples">
        <h1 className="container">10 Guiding Principles</h1>

        <PrinciplesSection />
      </main>
    );
  }

}

export default GuidingPrinciples;

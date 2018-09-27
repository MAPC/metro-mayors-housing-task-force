import React from 'react';

import Principle from './Principle';
import ImagePrinciple from './ImagePrinciple';

import principles from '~/_data/principles';


class PrinciplesSection extends React.Component {

  renderPrinciples() {
    return principles.map((principle, i) => {
      return (
        <li key={principle.title}>
          <div className="container">
            {
              (principle.image)
              ? (<ImagePrinciple
                  number={i+1}
                  principle={principle}

                />)
              : (<Principle
                  number={i+1}
                  principle={principle}
                />)
            }
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="component PrinciplesSection" >
        <ol className="principles-list">
          {this.renderPrinciples()}
        </ol>
      </section>
    );
  }

}

export default PrinciplesSection;

import React from 'react';

import Principle from './Principle';
import ImagePrinciple from './ImagePrinciple';

import principles from '~/_data/principles';


const PrinciplesSection = () => {

  const renderPrinciples = () => {
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

  return (
    <section className="component PrinciplesSection" >
      <ol className="principles-list">
        {renderPrinciples()}
      </ol>
    </section>
  );

}

export default PrinciplesSection;

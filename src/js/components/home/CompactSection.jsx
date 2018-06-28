import React from 'react';
import { Link } from 'react-router-dom';

import Signature from './Signature';
import taskForce from '~/_data/task-force';


class CompactSection extends React.Component {

  renderSignatures() {
    return taskForce.map(member => (
      <Signature
        key={member.name}
        title={member.title}
        name={member.name}
        municipalityName={member.municipalityName}
      />
    ));
  }

  render() {
    return (
      <section className="component CompactSection">
        <div className="sub-section">
          <div className="container">
            <h3 className="with-bar">The Compact</h3>
            <p>
              <b>Metro Boston is experiencing a housing crisis.</b> The rate of housing 
              production in Massachusetts is one of the lowest in the country, even 
              as we’ve seen increases in population and employment. Since 2010, the 
              Commonwealth has added nearly 250,000 residents and 350,000 new jobs, 
              while permitting only 81,000 new housing units <a href="#">(U.S. Census Bureau and 
              U.S. Bureau of Labor Statistics). </a>High demand and inadequate housing
              production contribute to rapidly rising home prices throughout eastern 
              Massachusetts, so that housing here has become among the highest cost 
              in the nation. Limited supply makes it difficult for Metro Boston 
              residents to find housing that works for them, and for employers to 
              retain and recruit workers.
            </p>
          </div>
        </div>

        <div className="sub-section">
          <div className="container columned">
            <p>
              To accommodate a growing economy, Metro Boston will need to build about 
              330,000 additional units between 2010 and 2030 <a href="#">(MAPC Population and Housing 
              Demand Projections). </a>Furthermore, changing preferences and rapid job growth 
              in and around Boston mean that an increasing share of this demand will be 
              in the region’s Inner Core, putting pressure on the existing housing stock. 
              Without additional units to meet that demand, rents and sale prices will 
              continue to rise, and lower-income households will be pushed out of their 
              communities.
            </p>

            <Link className="box-link" to={'/story'}>
              <img src="/assets/images/home-housing.jpg" alt="" />

              <div className="box-content">
                <large>Housing Metro Boston</large>
                <small>Explore the tools <span>></span></small>
              </div>
            </Link>
          </div>
        </div>

        <div className="sub-section">
          <div className="container columned">
            <p>
              However, this crisis is not just about sheer numbers; it’s about people. 
              We need housing that works for a range of household types and incomes, 
              including families with lower incomes: renters, students, young homebuyers, 
              empty nesters, seniors looking to downsize, families with children, 
              vulnerable residents, and people with disabilities. The Metro Mayors 
              Coalition (MMC) believes current residents must have housing options they 
              can afford in the communities where they want to live, and that newcomers 
              looking to live and work in the region should be able to make a home here. 
              Towards that end, we pledge to work together to increase housing opportunity 
              in Metro Boston in accordance with <Link to={'/guiding-principles'}>these principles.</Link>
            </p>

            <Link className="box-link" to={'/best-practices'}>
              <img src="/assets/images/home-best-practices.jpg" alt="" />

              <div className="box-content">
                <large>Best Practices</large>
                <small>Explore the tools <span>></span></small>
              </div>
            </Link>
          </div>

          <div className="container">
            <p>
              SIGNED,
              <div className="signatures">
                {this.renderSignatures()}
              </div>
            </p> 
          </div>
        </div>
      </section>
    );
  }
}


export default CompactSection;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Signature from './Signature';
import taskForce from '~/_data/task-force';

const missingSignatures = [
  'Arlington',
  'Melrose',
  'Newton',
  'Winthrop',
];

class CompactSection extends React.Component {

  render() {
    const signatures = taskForce
      .filter(member => missingSignatures.indexOf(member.municipalityName) === -1)
      .map((info) => (
        <Signature
          key={info.name}
          title={info.title}
          name={info.name}
          municipalityName={info.municipalityName}
        />
      ));

    return (
      <section className="component CompactSection">
        <div className="container">
          <h2>The Compact</h2>
          <p>Metro Boston is experiencing a housing crisis. The rate of housing production in Massachusetts is one of the lowest in the country, even as we’ve seen increases in population and employment. Since 2010, the Commonwealth has added nearly 250,000 residents and 350,000 new jobs, while permitting only 81,000 new housing units (U.S. Census Bureau and U.S. Bureau of Labor Statistics). High demand and inadequate housing production contribute to rapidly rising home prices throughout eastern Massachusetts, so that housing here has become among the highest cost in the nation. Limited supply makes it difficult for Metro Boston residents to find housing that works for them, and for employers to retain and recruit workers.</p>
          <p>To accommodate a growing economy, Metro Boston will need to build about 330,000 additional units between 2010 and 2030 (MAPC Population and Housing Demand Projections). Furthermore, changing preferences and rapid job growth in and around Boston mean that an increasing share of this demand will be in the region’s Inner Core, putting pressure on the existing housing stock. Without additional units to meet that demand, rents and sale prices will continue to rise, and lower-income households will be pushed out of their communities.</p>
          <p>However, this crisis is not just about sheer numbers; it’s about people. We need housing that works for a range of household types and incomes, including families with lower incomes: renters, students, young homebuyers, empty nesters, seniors looking to downsize, families with children, vulnerable residents, and people with disabilities. The Metro Mayors Coalition (MMC) believes current residents must have housing options they can afford in the communities where they want to live, and that newcomers looking to live and work in the region should be able to make a home here. Towards that end, we pledge to work together to increase housing opportunity in Metro Boston in accordance with these principles:</p>

          <ol>
            <li>
              <h4>Stakeholder and Municipal Engagement</h4>
              <p>We must engage in broad, inclusive outreach to municipal officials, residents, and other stakeholders within and beyond the MMC to understand and address regional housing concerns.</p>
            </li>
            <li>
              <h4>Housing Production</h4>
              <p>We strive to increase the production of housing throughout Metro Boston so that we can provide homes for all types of households and income levels. This should include both rental and homeownership opportunities, consistent with regional need, and designed in ways that respect the neighborhoods in which they are located.</p>
            </li>
            <li>
              <h4>Housing Preservation</h4>
              <p>We support the preservation of existing affordable housing choices. This includes protecting affordable apartments at risk of expiring subsidies or deed restrictions; preserving “naturally occurring” affordable housing; repairing older homes in need of maintenance and minimizing tear-downs; and preserving smaller homes.</p>
            </li>
            <li>
              <h4>Housing Affordability</h4>
              <p>We welcome and will invest in the development of housing that is affordable to low-, moderate-, and middle-income households.</p>
            </li>
            <li>
              <h4>Housing Diversity</h4>
              <p>We promote the development and preservation of diverse types of rental and homeownership housing at a range of scales and a unit mix inclusive of multiple bedrooms.</p>
            </li>
            <li>
              <h4>Housing Location</h4>
              <p>We encourage residential and mixed-use development in transit-accessible and/or walkable areas where people can get around locally and make connections throughout the region without relying on private auto. We also support creation of more such neighborhoods through expansion of public transit and retrofits of select former industrial sites.</p>
            </li>
            <li>
              <h4>Complete Neighborhoods</h4>
              <p>Our commitment to greater housing opportunity is part of a holistic approach to community building that includes a mix of land uses and access to open space. Our residents want to live in areas that offer a range of activity throughout the day and evening.</p>
            </li>
            <li>
              <h4>Housing Design</h4>
              <p>We support universal design in housing to create accessible and barrier-free homes through the incorporation of features that are commonly available and easily usable by people of virtually all ages and abilities.</p>
            </li>
            <li>
              <h4>Housing Stability</h4>
              <p>We will work to address extreme cost burdens, minimize the risk of displacement, reduce evictions, eliminate unfair rental practices, create permanent housing for homeless residents, and ensure safe and stable housing throughout Metro Boston.</p>
            </li>
            <li>
              <h4>Fair Housing</h4>
              <p>We are committed to abolishing discrimination against tenants and buyers, and advancing fair and equitable access to housing opportunity for everyone.</p>
            </li>
          </ol>
          <div className="signatures">
            {signatures}
          </div>
          <Link className="bubble housing" to={'/story'}>
            <div className="text">
              <h3>Housing Our Region</h3>
              <span>Explore the Issue ></span>
            </div>
          </Link>

          <Link className="bubble best-practices" to={'/best-practices'}>
            <div className="text">
              <h3>Best Practices</h3>
              <span>Explore Tools ></span>
            </div>
          </Link>
        </div>
      </section>
    );
  }
}

CompactSection.propTypes = {
};

export default CompactSection;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Signature from './Signature.jsx';

class CompactSection extends React.Component {
  constructor(props) {
    super(props);
    this.taskForceSignatures = [{
      title: 'Town Manager',
      name: 'Adam Chapdelaine',
      municipalityName: 'Arlington',
    }, {
      title: 'Mayor',
      name: 'Martin Walsh',
      municipalityName: 'Boston',
    }, {
      title: 'Mayor',
      name: 'Joseph Sullivan',
      municipalityName: 'Braintree',
    }, {
      title: 'Town Administrator',
      name: 'Mel Kleckner',
      municipalityName: 'Brookline',
    }, {
      title: 'City Manager',
      name: 'Louis Depasquale',
      municipalityName: 'Cambridge',
    }, {
      title: 'City Manager',
      name: 'Thomas Ambrosino',
      municipalityName: 'Chelsea',
    }, {
      title: 'Mayor',
      name: 'Carlo DeMaria Jr.',
      municipalityName: 'Everett',
    }, {
      title: 'Mayor',
      name: 'Gary Christenson',
      municipalityName: 'Malden',
    }, {
      title: 'Mayor',
      name: 'Stephanie Muccini Burke',
      municipalityName: 'Medford',
    }, {
      title: 'Mayor',
      name: 'Gail Infurna',
      municipalityName: 'Melrose',
    }, {
      title: 'Mayor',
      name: 'Ruthanne Fuller',
      municipalityName: 'Newton',
    }, {
      title: 'Mayor',
      name: 'Thomas Koch',
      municipalityName: 'Quincy',
    }, {
      title: 'Mayor',
      name: 'Brian Arrigo',
      municipalityName: 'Revere',
    }, {
      title: 'Mayor',
      name: 'Joseph Curatone',
      municipalityName: 'Somerville',
    }, {
      title: 'Town Manager',
      name: 'David Cressman',
      municipalityName: 'Winthrop',
    }];
  }

  render() {
    const signatures = this.taskForceSignatures.map((info) => (
      <Signature
        key={info.name}
        title={info.title}
        name={info.name}
        img={info.image}
        municipalityName={info.municipalityName}
      />
    ));

    return (
      <section className="component CompactSection">
        <h2>
          The Compact
          <div className="underline"></div>
        </h2>
        <p>Metro Boston is experiencing a housing crisis. The rate of housing production in Massachusetts is one of the lowest in the country, even as we’ve seen increases in population and employment. Since 2010, the Commonwealth has added nearly 250,000 residents and 350,000 new jobs, while permitting only 81,000 new housing units (U.S. Census Bureau and U.S. Bureau of Labor Statistics). High demand and inadequate housing production contribute to rapidly rising home prices throughout eastern Massachusetts, so that housing here has become among the highest cost in the nation. Limited supply makes it difficult for Metro Boston residents to find housing that works for them, and for employers to retain and recruit workers. </p>

        <p>To accommodate a growing economy, Metro Boston will need to build about 330,000 additional units between 2010 and 2030 (MAPC Population and Housing Demand Projections). Furthermore, changing preferences and rapid job growth in and around Boston mean that an increasing share of this demand will be in the region’s Inner Core, putting pressure on the existing housing stock. Without additional units to meet that demand, rents and sale prices will continue to rise, and lower-income households will be pushed out of their communities.</p>

        <p>However, this crisis is not just about sheer numbers; it’s about people. We need housing that works for a range of household types and incomes, including families with lower incomes: renters, students, young homebuyers, empty nesters, seniors looking to downsize, families with children, vulnerable residents, and people with disabilities. The Metro Mayors Coalition (MMC) believes current residents must have housing options they can afford in the communities where they want to live, and that newcomers looking to live and work in the region should be able to make a home here. Towards that end, we pledge to work together to increase housing opportunity in Metro Boston in accordance with these principles:</p>
        <ol>
          <li><b>Stakeholder and Municipal Engagement.</b> We must engage in broad, inclusive outreach to municipal officials, residents, and other stakeholders within and beyond the MMC to understand and address regional housing concerns.</li>

          <li><b>Housing Production.</b> We strive to increase the production of housing throughout Metro Boston so that we can provide homes for all types of households and income levels. This should include both rental and homeownership opportunities, consistent with regional need, and designed in ways that respect the neighborhoods in which they are located.</li>

          <li><b>Housing Preservation.</b> We support the preservation of existing affordable housing choices. This includes protecting affordable apartments at risk of expiring subsidies or deed restrictions; preserving “naturally occurring” affordable housing; repairing older homes in need of maintenance and minimizing tear-downs; and preserving smaller homes.</li>

          <li><b>Housing Affordability.</b> We welcome and will invest in the development of housing that is affordable to low-, moderate-, and middle-income households.</li>

          <li><b>Housing Diversity.</b> We promote the development and preservation of diverse types of rental and homeownership housing at a range of scales and a unit mix inclusive of multiple bedrooms. </li>

          <li><b>Housing Location.</b> We encourage residential and mixed-use development in transit-accessible and/or walkable areas where people can get around locally and make connections throughout the region without relying on private auto. We also support creation of more such neighborhoods through expansion of public transit and retrofits of select former industrial sites.</li>

          <li><b>Complete Neighborhoods.</b> Our commitment to greater housing opportunity is part of a holistic approach to community building that includes a mix of land uses and access to open space. Our residents want to live in areas that offer a range of activity throughout the day and evening.</li>

          <li><b>Housing Design.</b> We support universal design in housing to create accessible and barrier-free homes through the incorporation of features that are commonly available and easily usable by people of virtually all ages and abilities.</li>

          <li><b>Housing Stability.</b> We will work to address extreme cost burdens, minimize the risk of displacement, reduce evictions, eliminate unfair rental practices, create permanent housing for homeless residents, and ensure safe and stable housing throughout Metro Boston.</li>

          <li><b>Fair Housing.</b> We are committed to abolishing discrimination against tenants and buyers, and advancing fair and equitable access to housing opportunity for everyone.</li>
        </ol>

        {signatures}

        <a href="slide-show.html">About
          <div className="bubble housing">
            <img alt="A house" src="/assets/images/housing-house.svg" />
            <h3>Housing Our Region</h3>
            <span>Explore the Issue ></span>
          </div>
        </a>

        <Link to={'/best-practices'}>
          <div className="bubble best-practices">
            <img alt="A house" src="/assets/images/best-practices-house.svg" />
            <h3>Best Practices</h3>
            <span>Explore Tools ></span>
          </div>
        </Link>
      </section>
    );
  }
}

CompactSection.propTypes = {
};

export default CompactSection;

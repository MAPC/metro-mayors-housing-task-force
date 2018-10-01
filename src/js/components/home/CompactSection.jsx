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
      <section className="component CompactSection content-page">
        <div className="sub-section">
          <div className="container">
            <h3 className="with-bar">The Compact</h3>
            <p>
              <b>As Mayors and Managers, we know that Metro Boston is a great place to live,
              work and raise a family.</b> Lots of people agree. Our region's population and
              employment continue to increase because more people want to live and work here,
              yet the rate of housing production in Massachusetts is one of the lowest in the
              country.  As a result, Metro Boston is experiencing a housing crisis.
            </p>

            <p>
              Sale prices and rents are among the highest of any large metropolitan area across
              the country, and two-fifths of households have to dedicate more than a third of
              their income to housing, creating financial stress and housing instability. Many
              of these problems stem from the fact that housing supply is not keeping up with
              demand. This is especially true in the core of the metropolitan region. Since 2010,
              the 15 cities and towns of the Metro Mayors Coalition have added nearly 110,000
              residents and 148,000 new jobs, while permitting only 32,500 new housing units.
              Intense competition for the limited available housing drives up prices, makes it
              difficult for people to find homes they can afford, and increases the potential
              for displacement.
            </p>
          </div>
        </div>

        <div className="sub-section">
          <div className="container columned">
            <div>
              <p>
                These challenges are likely to intensify in the coming years. The Metro Mayors
                Coalition communities are on track to add 235,000 net new jobs from 2015 to 2030.
                Combined with the imminent retirement of the region’s Baby Boomers, this robust
                economic growth will attract hundreds of thousands of new workers to fill those
                available jobs. If recent trends continue, a growing share of those new workers
                will want to live near the core of the region, where they can be close to their
                jobs and all the amenities the area has to offer.
              </p>

              <p>
                After factoring in the housing demand created by these new workers, the increasing
                number of senior households, and the changing needs of existing residents, we
                estimate that the Metro Mayors Coalition will need to add 185,000 housing units
                from 2015 – 2030 in order to meet demand and reduce – or at least stabilize --
                housing costs.
              </p>
            </div>

            <Link className="box-link" to={'/story'}>
              <img src="/assets/images/home-housing.jpg" alt="" />

              <div className="box-content">
                <span className="large">Housing Metro Boston</span>
                <span className="small">Explore the story &gt;</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="sub-section">
          <div className="container columned">
            <p>
              We also recognize that the goal for housing production can’t only be about
              sheer numbers, because the region’s housing needs are as diverse as the people who
              live here. We need housing that works for all kinds of householdss: renters and
              homeowners, students and young homebuyers, empty nesters and seniors looking to
              downsize, individuals and couples as well as families with children. And we
              particularly need housing for vulnerable residents of our region, including people
              with disabilities, low and moderate-income households, and folks who needs services
              along with housing. As leaders of our communities, we believe current residents must
              have housing options they can afford in the communities where they live, and that
              newcomers looking to live and work in the region should be able to make a home here.
              Toward these ends, we pledge to work together – and in partnership with the
              Commonwealth – to increase housing opportunity in Metro Boston in accordance
              with <Link to={'/guiding-principles'}>these principles.</Link>
            </p>

            <Link className="box-link" to={'/best-practices'}>
              <img src="/assets/images/home-best-practices.jpg" alt="" />

              <div className="box-content">
                <span className="large">Best Practices</span>
                <span className="small">Explore the tools &gt;</span>
              </div>
            </Link>
          </div>

          <div className="container">
            <p>
              SIGNED,
            </p>
            <div className="signatures">
              {this.renderSignatures()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default CompactSection;

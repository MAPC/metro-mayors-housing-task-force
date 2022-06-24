import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Signature from './Signature';
import taskForce from '~/_data/task-force';


const CompactSection = (props) => {
  const location = useLocation();
  const isOriginalContract =  location.pathname.split("/").pop() === 'original-compact';

  const renderSignatures = () => {
    return taskForce.map(member => (
      member.municipalityName !== 'Winthrop'
      ? <Signature
          key={member.name}
          title={member.title}
          name={member.name}
          municipalityName={member.municipalityName}
        />
      : null
    ));
  }

    return (
      <section className="component CompactSection content-page">
        <div className="sub-section">
          <div className="container">
            <h3 className="with-bar">The Compact</h3>
            <p>
              <b>Metro Boston is a great place to live, work and raise a family.</b> Lots of people agree. Our region's population and employment continue to increase because more people want to live and work here. In many way’s we’re the envy of other regions that are struggling to attract new residents and jobs. Unfortunately, that success also brings challenges, one of which is that Metro Boston is experiencing a housing crisis.
            </p>

            <p>
              Sale prices and rents <a href="https://www.zillow.com/research/data/" target="_blank">are among the highest </a>of any large metropolitan area across the country, and <a target="_blank" href="https://datacommon.mapc.org/browser/datasets/189">two-fifths of households</a> have to dedicate more than a third of their income to housing, creating financial stress and housing instability. Many of these problems stem from the fact that housing supply is not keeping up with demand. This is especially true in the core of the metropolitan region. Since 2010, the 15 cities and towns of the<a target="_blank" href="https://www.mapc.org/get-involved/coalitions/mmc/"> Metro Mayors Coalition</a> have added nearly<a target="_blank" href="https://datacommon.mapc.org/browser/datasets/316"> 110,000 residents</a> and <a target="_blank" href="https://datacommon.mapc.org/browser/datasets/387">148,000 new jobs,</a> while permitting only<a target="_blank" href="https://datacommon.mapc.org/browser/datasets/384"> 32,500 new housing units</a>. Tremendous competition for the limited available housing drives up prices, makes it difficult for people to find homes they can afford, and increases the potential for displacement.
            </p>
          </div>
        </div>

        <div className="sub-section">
          <div className="container columned">
            <div>
              <p>
                These challenges are likely to intensify in the coming years. The Metro Mayors Coalition communities are on track to add 235,000 net new jobs from 2015 to 2030. Combined with the imminent retirement of the region’s Baby Boomers, this robust economic growth will attract hundreds of thousands of new workers to fill those available jobs. If recent trends continue, a growing share of those new workers will want to live near the core of the region, where they can be close to their jobs and all the amenities the area has to offer.
              </p>

              <p>
                After factoring in the housing demand created by these new workers, the increasing number of senior households, and the changing needs of existing residents, we estimate that the Metro Mayors Coalition will need to add 185,000 housing units from 2015 – 2030 in order to meet demand and reduce – or at least stabilize -- housing costs.
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
              We also recognize that the goal for housing production can’t only be about sheer numbers, because the region’s housing needs are as diverse as the people who live here. We need housing that works for all kinds of households: renters and homeowners, students and young homebuyers, empty nesters and seniors looking to downsize, individuals and couples as well as families with children. And we particularly need housing for vulnerable residents of our region, including people with disabilities, low and moderate-income households, and folks who needs services along with housing. As leaders of our communities, we believe current residents must have housing options they can afford in the communities where they live, and that newcomers looking to live and work in the region should be able to make a home here. Toward these ends, we pledge to work together – and in partnership with the Commonwealth – to increase housing opportunity in Metro Boston in accordance
              with <Link to={'/guiding-principles'}>these principles.</Link>
            </p>

            <Link className="box-link" to={'/strategies'}>
              <img src="/assets/images/home-best-practices.jpg" alt="" />

              <div className="box-content">
                <span className="large">Strategies</span>
                <span className="small">Explore the tools &gt;</span>
              </div>
            </Link>
          </div>

          {isOriginalContract &&
            <><div className="container">
            <p>
              SIGNED,
            </p>
            <div className="signatures">
              {renderSignatures()}
            </div>
          </div></>
          }
        </div>
      </section>
    );
}


export default CompactSection;

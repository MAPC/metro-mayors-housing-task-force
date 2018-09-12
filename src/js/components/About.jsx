import React from 'react';
import { Link } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';

const AboutSection = props => (
  <div className="sub-section">
    <div className={`container ${props.columned ? 'columned' : ''}`}>
      {props.children}
    </div>
  </div>
);


class About extends React.Component {

  render() {
    return (
      <ScrollToTop>
        <main className="component About content-page">
          <h1 className="container huge">About</h1>

          <AboutSection>
            <p>
              To address the housing crisis in Metro Boston through regional collaboration and
              mutual support, <a href="https://www.mapc.org/get-involved/coalitions/mmc/">the Metropolitan Mayors Coalition (MMC) </a>
              launched a Regional Housing
              Taskforce to establish a regional housing production goal and identify best
              practices to achieve that goal throughout the 15 participating communities. The
              Taskforce includes mayors and managers, as well as municipal staff, from the
              following municipalities: Arlington, Boston, Braintree, Brookline, Cambridge,
              Chelsea, Everett, Malden, Medford, Melrose, Newton, Quincy, Revere, Somerville, and Winthrop.
            </p>
          </AboutSection>

          <AboutSection columned={true}>
            <Link className="box-link" to={'/guiding-principles'}>
              <img src="/assets/images/home-housing.jpg" alt="" />

              <div className="box-content">
                <span className="large">Guiding Principles</span>
                <span className="small">Explore the principles</span>
              </div>
            </Link>

            <div>
              <p>
                Together, members of the Taskforce worked with the <a href="https://mapc.org">Metropolitan Area Planning Council (MAPC)</a> to
                agree on principles that guide future housing preservation and development in the MMC that
                works for a range of household types and incomes: renters, young homebuyers, seniors looking
                to downsize, families with children, people of color, people with disabilities, and others.
              </p>

              <p>
                The Taskforce also worked with MAPC to project labor force and housing demand to 2030,
                consider housing growth capacity, and assess affordability need. Based on this and economic
                forecasts, development trends, and analysis of recent production, the Taskforce adopted a
                regional housing production target to meet demand from households at a range of incomes.
              </p>
            </div>
          </AboutSection>

          <AboutSection>
            <p>
              To respond to demand and help make progress towards this regional housing production goal,
              the Taskforce researched best practices to facilitate housing production and preservation.
              These include changes to the regulatory framework, resource generation and allocation, local
              planning and policy, education and advocacy, and other tools. These strategies are
              <Link to={'/best-practices'}> collected here as a menu for municipalities</Link> to
              choose what might work best in their community to meet
              housing need and demand.
            </p>

            <p>
              These efforts, which were undertaken over a nine-month period starting in January 2018, are
              collected here for the MMC, all municipalities in the regions, community leaders, residents,
              and others to explore. It is our hope that this tool will support these allies by raising
              awareness and sharing important information about the regional housing crisis and how we can
              work together to expanding housing opportunity for all.
            </p>
          </AboutSection>
        </main>
      </ScrollToTop>
    );
  }

}

export default About;

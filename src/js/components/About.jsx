import React from 'react';
import { Link } from 'react-router-dom';

import taskForce from '~/_data/task-force';
import ScrollToTop from './utils/ScrollToTop';


const AboutSection = ({ children, columned }) => (
  <div className="sub-section">
    <div className={`container ${columned ? 'columned' : ''}`}>
      {children}
    </div>
  </div>
);


class About extends React.Component {

  renderProfileLinks() {
    const colors = ['orange', 'blue', 'skyblue', 'green', 'yellow'];
    const links = taskForce.sort((a,b) => a.municipalityName.localeCompare(b.municipalityName))
      .map(({ municipalityName }, i) => <span className="profile-link"><a className={colors[i % colors.length]} href={`https://datacommon.mapc.org/profile/${municipalityName.toLowerCase()}/housing`}> {municipalityName}</a>{i < taskForce.length - 1 ? ',' : ''}</span>);

    links[links.length - 1] = <span> and {links[links.length - 1]}</span>;
    return links;
  }

  componentDidMount() {
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const hashParts = window.location.hash.split('#');
    if (hashParts.length > 1) {
      const hash = hashParts.slice(-1)[0];
      document.querySelector(`#${hash}`).scrollIntoView();
    }
  }

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
              Taskforce to establish a regional housing production goal and identify strategies
              to achieve that goal throughout the 15 participating communities. The
              Taskforce includes mayors and managers, as well as municipal staff, from the
              following municipalities: {this.renderProfileLinks()}.
            </p>
          </AboutSection>

          <AboutSection columned={true}>
            <Link className="box-link" to={'/guiding-principles'}>
              <img src="/assets/images/home-housing.jpg" alt="" />

              <div className="box-content">
                <span className="large">Guiding Principles</span>
                <span className="small">Explore the principles &gt;</span>
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
              the Taskforce researched strategies to facilitate housing production and preservation.
              These include changes to the regulatory framework, resource generation and allocation, local
              planning and policy, education and advocacy, and other tools. These strategies are
              <Link to={'/strategies'}> collected here as a menu for municipalities</Link> to
              choose what might work best in their community to meet
              housing need and demand.
            </p>

            <p>
              These efforts, which were undertaken over a nine-month period starting in January 2018, are
              collected here for the MMC, all municipalities in the region, community leaders, residents,
              and others to explore. It is our hope that this tool will support these allies by raising
              awareness and sharing important information about the regional housing crisis and how we can
              work together to expand housing opportunity for all.
            </p>
          </AboutSection>

          <AboutSection>
            <h3 id="methods">Methods</h3>
            <p>
              The Metro Mayors Coalition worked together with the Metropolitan Area Planning
              Council to create a regional housing production target for 2015-2030. This housing production
              target was created to answer the question: If Metropolitan Mayors Communities continue to
              experience job growth at 2008-2016 rates, how many housing units would be needed in 2030? The
              projection of total housing demand is a combination of the demand associated with the net change
              in working households as employment in the region grows, demand associated with the net change
              in non-working households as more baby boomers retire, and the amount of units needed to create
              and maintain a healthy vacancy rate. These three elements of demand combine to create the
              Coalition’s target of 185,000 new housing units from 2015-2030.
              <br />
              <br />
              Read more about our methods <a href="/assets/documents/MAPC_MMC_Methods.pdf" target="_blank">here</a>.
            </p>
          </AboutSection>
        </main>
      </ScrollToTop>
    );
  }

}

export default About;

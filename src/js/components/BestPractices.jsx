import ScrollToTop from "./utils/ScrollToTop";
import Strategies from "./best-practices/Strategies";

const BestPractices = () => {
  return (
    <ScrollToTop>
      <main className="component BestPractices">
        <div className="container">
          <div className="best-practice-intro">
            <h1>Strategies</h1>

            <p>
              The housing crisis in Metro Boston is serious and complicated. It requires a robust toolkit of strategies to plan for and facilitate housing
              production and preservation, mitigate displacement, foster housing discussion, and other important approaches to addressing housing need and
              demand. Towards that end, the MMC Regional Housing Taskforce looked to local and national case studies and reports from reliable public, private,
              and non-profit organizations, including but not limited to Harvard’s Joint Center for Housing Studies, Berkeley’s Terner Center for Housing
              Innovation, NYU’s Furman Center, the Alliance for Housing Affordability, Mass Gov., and the U.S. Department of Housing and Urban Development.
            </p>

            <p>
              This serves as a digital repository of a diverse set of housing strategies, a go-to resource for residents, advocates, municipal staff, elected
              officials, community leaders, and others to educate themselves and their neighbors, advocate for, and implement. Here you will find information on
              more than 150 strategies ranging from state legislation to local planning and zoning to funding resources to programming to construction
              techniques to community engagement and beyond. And yet this is by no means a comprehensive list; it should serve as a menu of housing strategies
              for communities to learn and choose from.
            </p>

            <p>
              No one strategy will solve the housing crisis, and not all strategies are appropriate for all places. But the right combination for the region and
              its diverse communities will help expand housing diversity and opportunity across the Commonwealth.
            </p>
          </div>

          <div className="contact-box">
            <p>Are we missing strategies?</p>
            Share them with <a href="mailto:housingtaskforce@mapc.org">housingtaskforce@mapc.org</a>
          </div>
        </div>

        <Strategies />
      </main>
    </ScrollToTop>
  );
};

export default BestPractices;

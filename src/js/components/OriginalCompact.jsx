import ScrollToTop from "./utils/ScrollToTop";
import IntroSection from "./home/IntroSection.jsx";
import TaskForceNames from "./TaskForceNames.jsx";
import CompactSection from "./home/CompactSection.jsx";

const OriginalCompact = () => {
  return (
    <main className="component Home">
      <ScrollToTop>
        <IntroSection />
        <TaskForceNames />
        <CompactSection />
      </ScrollToTop>
    </main>
  );
};

export default OriginalCompact;

import ScrollToTop from "./utils/ScrollToTop";
import PrinciplesSection from "./guiding-principles/PrinciplesSection";

const GuidingPrinciples = () => {
  return (
    <ScrollToTop>
      <main className="component GuidingPrinciples">
        <h1 className="container huge">10 Guiding Principles</h1>

        <PrinciplesSection />
      </main>
    </ScrollToTop>
  );
};

export default GuidingPrinciples;

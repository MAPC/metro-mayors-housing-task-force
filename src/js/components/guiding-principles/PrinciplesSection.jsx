import CMSComponent from "../CMSComponent";

import Principle from "./Principle";
import ImagePrinciple from "./ImagePrinciple";

const PrincipleItem = (principle) => {
  return (
    <li>
      <div className="container">
        {principle.image ? <ImagePrinciple number={principle.order} principle={principle} /> : <Principle number={principle.order} principle={principle} />}
      </div>
    </li>
  );
};

const PrinciplesSection = () => {
  return (
    <section className="component PrinciplesSection">
      <ol className="principles-list">
        <CMSComponent
          tableName="Principles"
          keyField="title"
          fieldMapping={{
            title: "Title",
            content: "Content",
            image: "Image",
            order: "Order",
          }}
          sortBy={(a, b) => Number(a.order) - Number(b.order)}
          recordComponent={PrincipleItem}
        />
      </ol>
    </section>
  );
};

export default PrinciplesSection;

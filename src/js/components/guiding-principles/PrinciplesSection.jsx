import Principle from "./Principle";
import ImagePrinciple from "./ImagePrinciple";
import { useAirtableCMS } from "../../hooks/useAirtableCMS";

const PrinciplesSection = () => {
  const principles = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
    tableName: "Principles",
    keyField: "title",
    fieldMapping: {
      title: "Title",
      content: "Content",
      image: "Image",
      order: "Order",
    },
    sortBy: (a, b) => Number(a.order) - Number(b.order),
  });

  return (
    <section className="component PrinciplesSection">
      <ol className="principles-list">
        {principles.map((principle, i) => {
          return (
            <li key={principle.title}>
              <div className="container">
                {principle.image ? <ImagePrinciple number={i + 1} principle={principle} /> : <Principle number={i + 1} principle={principle} />}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default PrinciplesSection;

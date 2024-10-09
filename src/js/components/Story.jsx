import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Slide from "./story/Slide.jsx";
import slides from "~/_data/slides";

const Story = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current.focus();
  }, [mainRef]);

  const hasNext = () => {
    return currentSlide < slides.length - 1;
  };

  const hasPrevious = () => {
    return currentSlide > 0;
  };

  const forward = () => {
    if (hasNext()) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/strategies");
    }
  };

  const back = () => {
    if (hasPrevious()) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const arrowControls = ({ keyCode }) => {
    if (keyCode === 37) {
      back();
    } else if (keyCode === 39) {
      forward();
    }
  };

  const renderSlides = () => {
    return slides.map((slide, i) => {
      return <Slide key={`${i}-${slide.content[0].text}`} active={i === currentSlide} slide={slide} />;
    });
  };

  const slide = slides[currentSlide];

  return (
    <main tabIndex={0} ref={mainRef} className="component Story" onKeyDown={arrowControls}>
      <Header story={true} light={!slide.darkHeader} color={slide.headerColor} shadowed={slide.headerShadow} />

      {renderSlides()}

      <button className={`slide-control ${slide.darkHeader ? "dark" : ""} ${!hasPrevious() ? "disabled" : ""}`} onClick={() => back()}></button>
      <button className={`slide-control ${slide.darkHeader ? "dark" : ""}`} onClick={() => forward()}></button>
    </main>
  );
};

export default Story;

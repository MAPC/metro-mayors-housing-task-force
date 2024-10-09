import { useState, useEffect } from "react";

import Strategy from "./Strategy";
import BestPractice from "./BestPractice";
import topicData from "~/_data/topic-data";

const initialState = {
  overlayPracticeIndex: null,
  strategies: topicData.reduce((strategies, strategy) => {
    strategies[strategy.title] = {
      selected: false,
      title: strategy.title,
      principles: strategy.practices.reduce((principles, practice) => {
        practice.principles.forEach((principle) => {
          if (!principles[principle]) {
            principles[principle] = {
              selected: false,
              practices: [],
            };
          }

          principles[principle].practices.push(practice.title);
        });

        return principles;
      }, {}),
    };

    return strategies;
  }, {}),
  practices: topicData.reduce((practices, strategy) => {
    strategy.practices.forEach((practice) => {
      practices[practice.title] = practice;
    });

    return practices;
  }, {}),
};

const Strategies = () => {
  const [state, setState] = useState(initialState);

  const getSelectedStrategies = () => {
    const { strategies } = state;

    return Object.keys(strategies).filter((strategy) => strategies[strategy].selected);
  };

  const getSelectedPrinciples = () => {
    const { strategies } = state;

    const selectedPrinciples = getFilteredStrategies()
      .map((strategy) => strategies[strategy])
      .map(({ principles }) => Object.keys(principles).filter((principle) => principles[principle].selected))
      .reduce((a, b) => a.concat(b), []);

    return Array.from(new Set(selectedPrinciples));
  };

  const getFilteredStrategies = () => {
    const selectedStrategies = getSelectedStrategies();
    return selectedStrategies.length > 0 ? selectedStrategies : Object.keys(state.strategies);
  };

  const withoutPrinciples = () => {
    const { strategies } = JSON.parse(JSON.stringify(state)); // Deep copy

    for (let strategy in strategies) {
      for (let principle in strategies[strategy].principles) {
        strategies[strategy].principles[principle].selected = false;
      }
    }

    return strategies;
  };

  const handleStrategyClick = (strategyTitle) => {
    const selectedPrinciples = getSelectedPrinciples();
    const selectedStrategies = getSelectedStrategies();
    const { strategies } = state;
    const strategy = strategies[strategyTitle];

    strategy.selected = !strategy.selected;

    for (let principle in strategy.principles) {
      strategy.principles[principle].selected = !strategy.selected ? false : selectedPrinciples.includes(principle);
    }

    const unselectedStrategies = Object.keys(strategies).filter((strategy) => strategy !== strategyTitle && !selectedStrategies.includes(strategy));

    unselectedStrategies.forEach((strategy) => {
      for (let principle in strategies[strategy].principles) {
        strategies[strategy].principles[principle].selected = false;
      }
    });

    setState({ ...state, strategies });
  };

  const handlePrincipleClick = (principleTitle) => {
    const { strategies } = state;
    const selectedPrinciples = getSelectedPrinciples();

    getFilteredStrategies().forEach((strategy) => {
      const principle = strategies[strategy].principles[principleTitle];

      if (principle) {
        principle.selected = !principle.selected ? true : !selectedPrinciples.includes(principleTitle);
      }
    });

    setState({ ...state, strategies });
  };

  const deselectStrategies = () => {
    const { strategies } = state;

    for (let strategy in strategies) {
      strategies[strategy].selected = false;
    }

    setState({ ...state, strategies });
  };

  const deselectPrinciples = () => {
    setState({ ...state, strategies: withoutPrinciples() });
  };

  const renderStrategies = (topicData) => {
    const strategies = topicData.map((strategy) => {
      return (
        <Strategy
          key={strategy.title}
          title={strategy.title}
          onClick={() => handleStrategyClick(strategy.title)}
          selected={getSelectedStrategies().includes(strategy.title)}
        />
      );
    });

    return [<Strategy key={"All"} title={"All"} onClick={() => deselectStrategies()} selected={getSelectedStrategies().length === 0} />, ...strategies];
  };

  const renderPrinciples = () => {
    const selectedPrinciples = getSelectedPrinciples();
    const strategies = getFilteredStrategies();

    const uniquePrinciples = strategies.map((topic) => state.strategies[topic].principles).reduce((a, b) => ({ ...a, ...b }), {});

    const principles = Object.keys(uniquePrinciples).map((principle) => {
      return <Strategy key={principle} title={principle} onClick={() => handlePrincipleClick(principle)} selected={selectedPrinciples.includes(principle)} />;
    });

    return [<Strategy key={"All"} title={"All"} onClick={() => deselectPrinciples()} selected={selectedPrinciples.length === 0} />, ...principles];
  };

  const renderBestPractices = () => {
    const uniquePractices = getPractices();
    const rendered = {
      practices: [],
      additionalPractices: [],
    };

    uniquePractices.forEach((_practice, overlayPracticeIndex) => {
      const practice = state.practices[_practice];
      const render = <BestPractice key={_practice} practice={state.practices[_practice]} onClick={() => setState({ ...state, overlayPracticeIndex })} />;

      if (practice.additional) {
        rendered.additionalPractices.push(render);
      } else {
        rendered.practices.push(render);
      }
    });

    return rendered;
  };

  useEffect(() => {
    const overlayContent = document.querySelector(".overlay-content-scrollbox");

    if (overlayContent) {
      overlayContent.scrollTop = 0;
    }
  });

  const renderOverlay = () => {
    const practices = getPractices();
    const practice = state.practices[practices[state.overlayPracticeIndex]];

    return (
      <div className="practice-overlay">
        <div className="overlay-net" onClick={closeOverlay}></div>

        <div className="overlay-controls">
          <button className="slide-control" onClick={previousPractice}></button>
          <button className="slide-control" onClick={nextPractice}></button>
        </div>

        <div className="overlay-content-wrapper">
          <button className="close-button" onClick={closeOverlay}>
            Close
          </button>
          <div className="overlay-content-scrollbox">
            <div className="overlay-content">
              <h2>{practice.title}</h2>

              {practice.additional ? <span className="additional-tag">Additional Strategy</span> : null}

              <img src={`/assets/images/${practice.image}`} className="overlay-icon" />

              <div className="field">
                <h4>
                  Location{practice.location.length > 1 ? "s" : null} <span className="sub-header">Select areas where this strategy has been implemented</span>
                </h4>
                <ul className="locations">
                  {practice.location.map((location) => (
                    <li key={location}>{location}</li>
                  ))}
                </ul>
              </div>

              <div className="field">
                <h4>
                  Guiding Principle{practice.principles.length > 1 ? "s" : null}{" "}
                  <span className="sub-header">MMC Guiding Principles advanced by this strategy</span>
                </h4>
                <ul className="principles">
                  {practice.principles.map((principle) => (
                    <li key={principle}>{principle}</li>
                  ))}
                </ul>
              </div>

              <div className="field">
                <h4>Overview</h4>
                <p>{practice.overview}</p>
              </div>

              {practice.adoption && (
                <div className="field">
                  <h4>
                    Adoption <span className="sub-header">Does this strategy require state or local action to implement?</span>
                  </h4>
                  <p>{practice.adoption}</p>
                </div>
              )}

              {practice.who && (
                <div className="field">
                  <h4>
                    Who Implements It?
                    <span className="sub-header">Those in the lead and supporting roles to put this strategy into action</span>
                  </h4>
                  <p>{practice.who}</p>
                </div>
              )}

              {practice.what && (
                <div className="field">
                  <h4>What Does It Do?</h4>
                  <p>{practice.what}</p>
                </div>
              )}

              {practice.where && (
                <div className="field">
                  <h4>
                    Where Has It Worked? <span className="sub-header">Select local and national case studies</span>
                  </h4>
                  <p>{practice.where}</p>
                </div>
              )}

              {practice.considerations && (
                <div className="field">
                  <h4>
                    Key Considerations <span className="sub-header">Some things strategy users and supporters should keep in mind</span>
                  </h4>
                  <p>{practice.considerations}</p>
                </div>
              )}

              <div className="field">
                <h4>
                  Resources <span className="sub-header">More information</span>
                </h4>
                <ul className="resources">
                  {practice.resources.map((resource) => (
                    <li key={resource.title}>
                      <a target="_blank" href={resource.link}>
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getPractices = () => {
    const strategies = getFilteredStrategies();
    const selectedPrinciples = getSelectedPrinciples();

    const bestPractices = strategies.reduce((bestPractices, strategy) => {
      const { principles } = { ...state.strategies[strategy] };

      const filteredPrinciples =
        selectedPrinciples.length > 0 ? Object.keys(principles).filter((principle) => selectedPrinciples.includes(principle)) : Object.keys(principles);

      const strategyBestPractices = filteredPrinciples.map((principle) => principles[principle].practices).reduce((a, b) => a.concat(b), []);

      return [...bestPractices, ...strategyBestPractices];
    }, []);

    return Array.from(new Set(bestPractices));
  };

  const nextPractice = () => {
    const overlayPracticeIndex = state.overlayPracticeIndex === getPractices().length - 1 ? 0 : state.overlayPracticeIndex + 1;

    setState({ ...state, overlayPracticeIndex });
  };

  const previousPractice = () => {
    const overlayPracticeIndex = (state.overlayPracticeIndex === 0 ? getPractices().length : state.overlayPracticeIndex) - 1;

    setState({ ...state, overlayPracticeIndex });
  };

  const closeOverlay = () => {
    setState({ ...state, overlayPracticeIndex: null });
  };

  const { practices, additionalPractices } = renderBestPractices();

  return (
    <div className="component Strategies housing-best-practices container">
      {typeof state.overlayPracticeIndex === "number" && renderOverlay()}

      <div className="button-container">
        <h3>STRATEGY</h3>
        {renderStrategies(topicData)}
      </div>

      <div className="button-container">
        <h3>Principles</h3>
        <p>Which of the MMC Regional Housing Task Force principles do these strategies advance?</p>

        {renderPrinciples()}
      </div>

      <div className="best-practices">{practices}</div>

      {additionalPractices.length > 0 && (
        <div className="additional-practices">
          <h3>Additional Strategies</h3>

          <div className="best-practices">{additionalPractices}</div>
        </div>
      )}
    </div>
  );
};

export default Strategies;

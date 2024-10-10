import React, { useState, useEffect } from 'react';
import Strategy from './Strategy';
import BestPractice from './BestPractice';
import topicData from '~/_data/topic-data';

const Strategies = () => {
  const [overlayPracticeIndex, setOverlayPracticeIndex] = useState(null);
  const [strategies, setStrategies] = useState(() => {
    return topicData.reduce((acc, strategy) => {
      acc[strategy.title] = {
        selected: false,
        title: strategy.title,
        principles: strategy.practices.reduce((principles, practice) => {
          practice.principles.forEach(principle => {
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
      return acc;
    }, {});
  });

  const practices = topicData.reduce((acc, strategy) => {
    strategy.practices.forEach(practice => {
      acc[practice.title] = practice;
    });
    return acc;
  }, {});

  const getSelectedStrategies = () => {
    return Object.keys(strategies).filter(strategy => strategies[strategy].selected);
  };

  const getSelectedPrinciples = () => {
    const selectedPrinciples = getFilteredStrategies()
      .flatMap(strategy => Object.keys(strategies[strategy].principles)
        .filter(principle => strategies[strategy].principles[principle].selected));

    return unique(selectedPrinciples);
  };

  const getFilteredStrategies = () => {
    const selectedStrategies = getSelectedStrategies();
    return selectedStrategies.length > 0 ? selectedStrategies : Object.keys(strategies);
  };

  const withoutPrinciples = () => {
    const copiedStrategies = JSON.parse(JSON.stringify(strategies)); // Deep copy
    for (let strategy in copiedStrategies) {
      for (let principle in copiedStrategies[strategy].principles) {
        copiedStrategies[strategy].principles[principle].selected = false;
      }
    }
    return copiedStrategies;
  };

  const handleStrategyClick = (strategyTitle) => {
    const copiedStrategies = { ...strategies };
    const strategy = copiedStrategies[strategyTitle];
    strategy.selected = !strategy.selected;

    for (let principle in strategy.principles) {
      strategy.principles[principle].selected = strategy.selected && getSelectedPrinciples().includes(principle);
    }

    // Deselect other strategies' principles
    Object.keys(copiedStrategies).forEach(key => {
      if (key !== strategyTitle && !copiedStrategies[key].selected) {
        for (let principle in copiedStrategies[key].principles) {
          copiedStrategies[key].principles[principle].selected = false;
        }
      }
    });

    setStrategies(copiedStrategies);
  };

  const handlePrincipleClick = (principleTitle) => {
    const copiedStrategies = { ...strategies };

    getFilteredStrategies().forEach(strategy => {
      const principle = copiedStrategies[strategy].principles[principleTitle];
      if (principle) {
        principle.selected = !principle.selected;
      }
    });

    setStrategies(copiedStrategies);
  };

  const deselectStrategies = () => {
    const copiedStrategies = { ...strategies };
    Object.keys(copiedStrategies).forEach(strategy => {
      copiedStrategies[strategy].selected = false;
    });
    setStrategies(copiedStrategies);
  };

  const deselectPrinciples = () => {
    setStrategies(withoutPrinciples());
  };

  const renderStrategies = () => {
    return [
      <Strategy
        key={'All'}
        title={'All'}
        onClick={deselectStrategies}
        selected={getSelectedStrategies().length === 0}
      />,
      ...topicData.map(strategy => (
        <Strategy
          key={strategy.title}
          title={strategy.title}
          onClick={() => handleStrategyClick(strategy.title)}
          selected={getSelectedStrategies().includes(strategy.title)}
        />
      )),
    ];
  };

  const renderPrinciples = () => {
    const selectedPrinciples = getSelectedPrinciples();
    const strategiesList = getFilteredStrategies();
    const uniquePrinciples = strategiesList.reduce((acc, topic) => {
      return { ...acc, ...strategies[topic].principles };
    }, {});

    return [
      <Strategy
        key={'All'}
        title={'All'}
        onClick={deselectPrinciples}
        selected={selectedPrinciples.length === 0}
      />,
      ...Object.keys(uniquePrinciples).map(principle => (
        <Strategy
          key={principle}
          title={principle}
          onClick={() => handlePrincipleClick(principle)}
          selected={selectedPrinciples.includes(principle)}
        />
      )),
    ];
  };

  const getPractices = () => {
    const filteredStrategies = getFilteredStrategies();
    const selectedPrinciples = getSelectedPrinciples();

    return filteredStrategies.reduce((bestPractices, strategy) => {
      const { principles } = strategies[strategy];
      const filteredPrinciples = selectedPrinciples.length > 0
        ? Object.keys(principles).filter(principle => selectedPrinciples.includes(principle))
        : Object.keys(principles);

      const strategyBestPractices = filteredPrinciples
        .flatMap(principle => principles[principle].practices);

      return [...bestPractices, ...strategyBestPractices];
    }, []);
  };

  const renderBestPractices = () => {
    const uniquePractices = getPractices();
    const rendered = {
      practices: [],
      additionalPractices: [],
    };

    uniquePractices.forEach((practiceTitle) => {
      const practice = practices[practiceTitle];
      const render = (
        <BestPractice
          key={practiceTitle}
          practice={practice}
          onClick={() => setOverlayPracticeIndex(practiceTitle)}
        />
      );

      if (practice.additional) {
        rendered.additionalPractices.push(render);
      } else {
        rendered.practices.push(render);
      }
    });

    return rendered;
  };

  useEffect(() => {
    const overlayContent = document.querySelector('.overlay-content-scrollbox');
    if (overlayContent) {
      overlayContent.scrollTop = 0;
    }
  }, [overlayPracticeIndex]);

  const renderOverlay = () => {
    const practicesList = getPractices();
    const practice = practices[practicesList[overlayPracticeIndex]];

    return (
      <div className="practice-overlay">
        <div className="overlay-net" onClick={() => setOverlayPracticeIndex(null)}></div>

        <div className='overlay-controls'>
          <button className='slide-control' onClick={previousPractice}></button>
          <button className='slide-control' onClick={nextPractice}></button>
        </div>

        <div className="overlay-content-wrapper">
          <button className="close-button" onClick={() => setOverlayPracticeIndex(null)}>Close</button>
          <div className="overlay-content-scrollbox">
            <div className="overlay-content">
              <h2>{practice.title}</h2>
              {practice.additional && <span className="additional-tag">Additional Strategy</span>}
              <img src={`/assets/images/${practice.image}`} className="overlay-icon" />

              <div className="field">
                <h4>Location{practice.location.length > 1 ? 's' : null} <span className="sub-header">Select areas where this strategy has been implemented</span></h4>
                <ul className="locations">
                  {practice.location.map(location => <li key={location}>{location}</li>)}
                </ul>
              </div>

              <div className="field">
                <h4>Guiding Principle{practice.principles.length > 1 ? 's' : null} <span className="sub-header">MMC Guiding Principles advanced by this strategy</span></h4>
                <ul className="principles">
                  {practice.principles.map(principle => <li key={principle}>{principle}</li>)}
                </ul>
              </div>

              <div className="field">
                <h4>Overview</h4>
                <p>{practice.overview}</p>
              </div>

              {practice.adoption && (
                <div className="field">
                  <h4>Adoption <span className="sub-header">Does this strategy require state or local action to implement?</span></h4>
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
                  <h4>Where Has It Worked? <span className="sub-header">Select local and national case studies</span></h4>
                  <p>{practice.where}</p>
                </div>
              )}

              {practice.considerations && (
                <div className="field">
                  <h4>Key Considerations <span className="sub-header">Some things strategy users and supporters should keep in mind</span></h4>
                  <p>{practice.considerations}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="strategies">
      {renderStrategies()}
      {renderPrinciples()}
      {renderBestPractices().practices}
      {renderBestPractices().additionalPractices}
      {overlayPracticeIndex !== null && renderOverlay()}
    </div>
  );
};

export default Strategies;

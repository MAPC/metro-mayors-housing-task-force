import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Member from './Member.jsx';

class TaskForceSection extends React.Component {
  constructor(props) {
    super(props);
    this.taskForceMembers = [{
      title: 'Town Manager',
      name: 'Adam Chapdelaine',
      municipalityName: 'Arlington',
    }, {
      title: 'Mayor',
      name: 'Martin Walsh',
      municipalityName: 'Boston',
    }, {
      title: 'Mayor',
      name: 'Joseph Sullivan',
      municipalityName: 'Braintree',
    }, {
      title: 'Town Administrator',
      name: 'Mel Kleckner',
      municipalityName: 'Brookline',
    }, {
      title: 'City Manager',
      name: 'Louis Depasquale',
      municipalityName: 'Cambridge',
    }, {
      title: 'City Manager',
      name: 'Thomas Ambrosino',
      municipalityName: 'Chelsea',
    }, {
      title: 'Mayor',
      name: 'Carlo DeMaria Jr.',
      municipalityName: 'Everett',
    }, {
      title: 'Mayor',
      name: 'Gary Christenson',
      municipalityName: 'Malden',
    }, {
      title: 'Mayor',
      name: 'Stephanie Muccini Burke',
      municipalityName: 'Medford',
    }, {
      title: 'Mayor',
      name: 'Gail Infurna',
      municipalityName: 'Melrose',
    }, {
      title: 'Mayor',
      name: 'Ruthanne Fuller',
      municipalityName: 'Newton',
    }, {
      title: 'Mayor',
      name: 'Thomas Koch',
      municipalityName: 'Quincy',
    }, {
      title: 'Mayor',
      name: 'Brian Arrigo',
      municipalityName: 'Revere',
    }, {
      title: 'Mayor',
      name: 'Joseph Curatone',
      municipalityName: 'Somerville',
    }, {
      title: 'Town Manager',
      name: 'David Cressman',
      municipalityName: 'Winthrop',
    }];
  }

  render() {

    const members = this.taskForceMembers.map((info) => (
      <Member
        key={info.name}
        title={info.title}
        name={info.name}
        img={info.image}
        municipalityName={info.municipalityName}
      />
    ));

    return (
      <section className="component TaskForceSection">
        <div>
          <div className="row-1">
            <div className="task-force-members">
              {members.slice(0, 5)}
            </div>
          </div>
          <div className="row-2">
            <div className="task-force-members">
              {members.slice(5, 10)}
            </div>
            <div className="heading-container">
              <h2>{'The Task Force'}</h2>
            </div>
          </div>
          <div className="row-3">
            <div className="task-force-members">
              {members.slice(10)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TaskForceSection.propTypes = {
};

export default TaskForceSection;

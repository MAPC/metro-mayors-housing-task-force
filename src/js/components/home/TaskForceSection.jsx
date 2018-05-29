import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Member from './Member';
import taskForce from '~/_data/task-force';

class TaskForceSection extends React.Component {

  render() {
    const members = taskForce.map((info) => (
      <Member
        key={info.name}
        title={info.title}
        name={info.name}
        municipalityName={info.municipalityName}
      />
    ));

    return (
      <section className="component TaskForceSection">
        <div className="column five">
          <div className="row">
            <div className="task-force-members">
              {members.slice(0, 5)}
            </div>
          </div>
          <div className="row heading-row">
            <div className="task-force-members">
              {members.slice(5, 10)}
            </div>
            <div className="heading-container">
              <Link to={'/about'}>
                <h2>{'The Task Force'}</h2>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="task-force-members">
              {members.slice(10)}
            </div>
          </div>
        </div>

        <div className="column three">
          <div className="row">
            <div className="task-force-members">
              {members.slice(0, 3)}
            </div>
          </div>
          <div className="row heading-row">
            <div className="task-force-members">
              {members.slice(3, 6)}
            </div>
            <div className="heading-container">
              <Link to={'/about'}>
                <h2>{'The Task Force'}</h2>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="task-force-members">
              {members.slice(6, 9)}
            </div>
          </div>
          <div className="row">
            <div className="task-force-members">
              {members.slice(9, 12)}
            </div>
          </div>
          <div className="row">
            <div className="task-force-members">
              {members.slice(12, 15)}
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

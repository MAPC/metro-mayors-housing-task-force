import React from 'react';
import { Link } from 'react-router-dom';

import Member from './Member';
import taskForce from '~/_data/task-force';


class TaskForceSection extends React.Component {

  renderMembers() {
    return taskForce.map(member => (
      <Member
        key={member.name}
        title={member.title}
        name={member.name}
        municipalityName={member.municipalityName}
        color={member.color}
      />
    ));
  }

  render() {
    return (
      <section className="component TaskForceSection container">
        <h3 className="with-bar">The Task Force</h3>
        <div className="task-force-members">
          {this.renderMembers()}
        </div>
      </section>
    );
  }

}

export default TaskForceSection;

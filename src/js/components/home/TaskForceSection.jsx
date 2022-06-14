import React from 'react';

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
    const isOriginalContract =  window.location.href.split("/").pop() === 'original-compact';
    return (
      <section className="component TaskForceSection container">
        <h3 className="with-bar">{isOriginalContract ? 'The Task Force' : 'Taskforce Communities'}</h3>
        <div className="task-force-members">
          {this.renderMembers()}
        </div>
      </section>
    );
  }

}

export default TaskForceSection;

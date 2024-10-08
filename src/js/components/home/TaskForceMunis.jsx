import React from 'react';
import { useLocation } from 'react-router-dom';

import MemberMuni from './MemberMuni';
import { useAirtableCMS } from '../../hooks/useAirtableCMS';


const TaskForceMunis = () => {
  const taskForce = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
    tableName: "Task Force Members",
    keyField: "municipality",
    fieldMapping: {
      municipality: "Municipality",
      title: "Title",
      name: "Name",
      color: "Color",
      originalCompact: "Original Compact",
      currentMember: "Current Member",
    },
    sortBy: (a, b) => a.municipality.localeCompare(b.municipality)
  });

  return (
    <section className="component TaskForceSection container">
      <h3 className="with-bar">The Task Force Communities</h3>
      <div className="task-force-members">
        {taskForce
        // Filter any members that are not currently in the Coalition
        .filter(member => member.currentMember)
        .map(member => (
          <MemberMuni
            key={member.name}
            title={member.title}
            name={member.name}
            municipalityName={member.municipality}
            color={member.color}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskForceMunis;

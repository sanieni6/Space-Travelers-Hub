import React from 'react';
import { useSelector } from 'react-redux';

const RenderJoined = () => {
  const resrvedMission = useSelector((store) => store.mission.missions)
    .filter((mission) => mission.reserved);
  console.log(resrvedMission);
  return (
    <section className="missions">
      <h2>My Missions</h2>
      <div className="bookedMission">
        {resrvedMission.map((mission) => (
          <p key={mission.mission_id} className="booked-element">
            {mission.mission_name}
          </p>
        ))}
      </div>
    </section>
  );
};

export default RenderJoined;

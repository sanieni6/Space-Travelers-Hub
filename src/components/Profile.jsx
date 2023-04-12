import React from 'react';
import { useSelector } from 'react-redux';
import RenderJoined from './renderJoined';

const Profile = () => {
  const reservedMission = useSelector((store) => store.mission.missions)
    .filter((mission) => mission.reserved);
  const reservedRockets = useSelector((store) => store.rockets.rockets)
    .filter((rocket) => rocket.reserved);
  return (
    <ul className="reserved-sections">
      <li className="section">
        <RenderJoined list={reservedMission} render="missions" />
      </li>
      <li className="section">
        <RenderJoined list={reservedRockets} render="rockets" />
      </li>
    </ul>
  );
};

export default Profile;

import React from 'react';
import { useSelector } from 'react-redux';
import RenderJoined from './renderJoined';
import '../styles/App.css';

const Profile = () => {
  const reservedMission = useSelector((store) => store.mission.missions)
    .filter((mission) => mission.reserved);
  const reservedRockets = useSelector((store) => store.rockets.rockets)
    .filter((rocket) => rocket.reserved);
  const reservedDragons = useSelector((store) => store.dragon.dragons)
    .filter((dragon) => dragon.reserved);
  return (
    <ul className="reserved-sections">
      <li className="section">
        <RenderJoined list={reservedMission} render="missions" />
      </li>
      <li className="section">
        <RenderJoined list={reservedRockets} render="rockets" />
      </li>
      <li className="section">
        <RenderJoined list={reservedDragons} render="dragons" />
      </li>
    </ul>
  );
};

export default Profile;

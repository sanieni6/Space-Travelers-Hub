import React from 'react';
import RenderJoined from './renderJoined';
import RenderDragon from './renderDragon';
import '../styles/App.css';

const Profile = () => (
  <div className="profile-contanier">
    <RenderJoined />
    <RenderDragon />
  </div>
);

export default Profile;

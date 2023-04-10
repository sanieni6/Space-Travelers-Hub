import React from 'react';
import Planet from '../images/planet.png';

const Dragons = () => (
  <div className="dragonCard">
    <img className="dragonImage" src={Planet} alt="dragon" />
    <div className="dragonInfo">
      <h2>Dragon</h2>
      <button className="reservDragon" type="button">
        Reserve
      </button>
      <button className="cancelDragon" type="button">
        Cancel Reservation
      </button>
    </div>
  </div>
);

export default Dragons;

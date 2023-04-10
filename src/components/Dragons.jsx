import React from 'react';
import Planet from '../images/planet.png';

const Dragons = () => (
  <>
    <img src={Planet} alt="img" />
    <h1>Dragons</h1>
    <p>Dragons are a type of creature that can be found in the game.</p>
    <button type="button">reserve</button>
    <button type="button">cancel</button>
  </>
);

export default Dragons;

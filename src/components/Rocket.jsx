import React from 'react';
import PropTypes from 'prop-types';
import '../styles/rocket.scss';

const Rocket = ({
  name, description, image,
}) => (
  <li className="rocket">
    <img src={image} alt="rockets" className="rocket-image" />
    <div className="rocket-information">
      <h3 className="Rocket-name">{name}</h3>
      <p className="rocket-description">{description}</p>
      <button type="button" className="reserve-button">Reserve Rocket</button>
    </div>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;

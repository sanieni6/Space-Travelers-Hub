import React from 'react';
import PropTypes from 'prop-types';

const Dragon = ({
  name, type, description, image,
}) => (
  <div className="dragonCard">
    <img src={image} alt="dragon" className="dragonImage" />

    <div className="dragonInfo">
      <h2>{name}</h2>
      <h3 className="dragonType">{type}</h3>
      <p>{description}</p>
      <button className="reservDragon" type="button">
        Reserve
      </button>
      <button className="cancelDragon" type="button">
        Cancel Reservation
      </button>
    </div>
  </div>
);

Dragon.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  image: PropTypes.string.isRequired,
};

export default Dragon;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import reserveDragon from '../redux/dragon/dragonSlice';

const Dragon = ({
  name, type, description, image, reserved, id,
}) => {
  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  return (
    <div className="dragonCard">
      <img className="dragonImage" src={image} alt="dragon" />
      <div className="dragonInfo">
        <h2>{name}</h2>
        <h3 className="dragonType">{type}</h3>
        <p>
          {reserved ? (
            <span className="reservation-status">Reserved</span>
          ) : (
            <span />
          )}
          {description}
        </p>
        <button
          type="button"
          onClick={() => {
            handleReserve(id);
          }}
          className="reservDragon"
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Dragon;

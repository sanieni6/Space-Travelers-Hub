import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/rocket.scss';
import { reservedRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  name, description, image, reserved, id,
}) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(reservedRocket(id));
  };
  return (
    <li className="rocket">
      <img src={image} alt="rockets" className="rocket-image" />
      <div className="rocket-information">
        <h3 className="Rocket-name">{name}</h3>
        <p className="rocket-description">
          {
            reserved ? <span className="reservation-status">Reserved</span> : <span />
          }
          {description}
        </p>
        <button type="button" onClick={() => { handleClick(id); }} className="reserve-button">
          {
            reserved ? 'Cancel Reservation' : 'Reserve Rocket'
          }
        </button>
      </div>
    </li>
  );
};

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
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

};

export default Rocket;

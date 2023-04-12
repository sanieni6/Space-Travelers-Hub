import React from 'react';
import PropTypes from 'prop-types';

const RenderJoined = ({ list, render }) => {
  const reservedRender = () => {
    if (render === 'missions') {
      return (

        <>
          <h2>My Missions</h2>
          <div className="bookedMission">
            {list.map((mission) => (
              <p key={mission.mission_id} className="booked-element">
                {mission.name}
              </p>
            ))}
          </div>

        </>
      );
    } if (render === 'rockets') {
      return (

        <>
          <h2>My Rockets</h2>
          <div className="bookedMission">
            {list.map((rocket) => (
              <p key={rocket.id} className="booked-element">
                {rocket.name}
              </p>
            ))}
          </div>

        </>
      );
    }

    return (
      <>
        <h2>My Dragons</h2>
        <div className="bookedMission">
          {list.map((dragon) => (
            <p key={dragon.id} className="booked-element">
              {dragon.name}
            </p>
          ))}
        </div>

      </>
    );
  };
  return (
    <section className="missions">
      {reservedRender()}
    </section>

  );
};

RenderJoined.propTypes = {
  list: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  render: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default RenderJoined;

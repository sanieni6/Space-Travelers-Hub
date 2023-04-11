import React from 'react';
import { useSelector } from 'react-redux';

const RenderDragon = () => {
  // Assuming that the Redux store has a 'dragon' slice with a 'dragons' property
  const reservedDragon = useSelector((state) => state.dragon.dragons
    .filter((dragon) => dragon.reserved));
  return (
    <section className="missions">
      <h2>My Dragons</h2>
      <div className="bookedMission">
        {reservedDragon.map((dragon) => (
          <p key={dragon.id} className="booked-element">
            {dragon.name}
          </p>
        ))}
      </div>
    </section>
  );
};

export default RenderDragon;

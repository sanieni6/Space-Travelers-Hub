import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);
  return (
    <div>
      <ul className="rocket-list">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            image={rocket.flickr_images}
          />

        ))}

      </ul>
    </div>
  );
};

export default Rockets;

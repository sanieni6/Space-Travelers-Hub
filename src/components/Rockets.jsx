import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRockects } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockects());
  }, [dispatch]);
  return (
    <div>
      <div className="border-line"> </div>
      <ul className="rocket-list">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            image={rocket.flickr_images[1]}
          />

        ))}

      </ul>
    </div>
  );
};

export default Rockets;

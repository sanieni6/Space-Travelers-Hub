import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRockects } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockects());
    }
  }, [dispatch, rockets]);
  return (
    <div>
      <ul className="rocket-list">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.flickr_images}
            reserved={rocket.reserved}
            id={rocket.id}
          />

        ))}

      </ul>
    </div>
  );
};

export default Rockets;

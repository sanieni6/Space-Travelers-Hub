import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from './Dragon';

const Dragons = () => {
  const dragons = useSelector((store) => store.dragon.dragons);

  return (
    <div>
      <ul className="dragon-list">
        {dragons.map((dragon) => (
          <Dragon
            key={dragon.id}
            name={dragon.dragon_name}
            type={dragon.dragon_type || 'Unknown'}
            description={dragon.description}
            image={dragon.flickr_images}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dragons;

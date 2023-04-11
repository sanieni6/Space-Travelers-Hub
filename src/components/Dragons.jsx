import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from './Dragon';

const Dragons = () => {
  const { dragons } = useSelector((store) => store.dragons);

  return (
    <>
      <ul className="dragon-list">
        {dragons.map((dragon) => (
          <Dragon
            key={dragon.id}
            name={dragon.name}
            type={dragon.type}
            description={dragon.description}
            image={dragon.image}
          />
        ))}
      </ul>
    </>
  );
};

export default Dragons;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dragon from './Dragon';
import { getDragons } from '../redux/dragon/dragonSlice';

const Dragons = () => {
  const dragons = useSelector((store) => store.dragon.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dragons.length) {
      dispatch(getDragons());
    }
  }, [dispatch, dragons]);

  return (
    <div>
      <ul className="dragon-list">
        {dragons.map((dragon) => (
          <Dragon
            key={dragon.id}
            name={dragon.name}
            type={dragon.type}
            description={dragon.description}
            image={dragon.flickr_images[0]}
            reserved={dragon.reserved}
            id={dragon.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dragons;

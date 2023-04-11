import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { missionList } from '../redux/mission/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(missionList());
  }, []);
  return (
    <h2>missions</h2>
  );
};

export default Missions;

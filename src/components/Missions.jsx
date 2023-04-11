import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missionList } from '../redux/mission/missionSlice';
import MissionItem from './mission';
import '../styles/mission.scss';

const Missions = () => {
  const { missions } = useSelector((store) => store.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(missionList());
  }, []);
  return (
    <>
      <div className="border-line"> </div>
      <table>
        <thead>
          <tr>
            <th><h4>Mission</h4></th>
            <th><h4>Description</h4></th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        {missions.map((mssn) => (
          <MissionItem
            key={mssn.mission_id}
            id={mssn.mission_id}
            name={mssn.mission_name}
            description={mssn.description}
            mssn={mssn}
          />
        ))}
      </table>
    </>
  );
};

export default Missions;

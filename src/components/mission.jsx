import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateState, leaveMission } from '../redux/mission/missionSlice';

const MissionItem = ({
  id, name, description, mssn,
}) => {
  const dispatch = useDispatch();

  const handleClick = (id, mission) => {
    if (mission.reserved) {
      dispatch(leaveMission(id));
    } else {
      dispatch(updateState(id));
    }
  };
  return (
    <tbody>
      <tr className="column">
        <td><h4>{name}</h4></td>
        <td>{description}</td>
        <td className="btnns">
          { !mssn.reserved ? (
            <button
              type="button"
              className="btn-not"
            >
              NOT A MEMBER
              {' '}
              <p />
            </button>
          ) : (
            <button
              type="button"
              className="btn-mem"
            >
              Active Member
            </button>
          )}
        </td>
        <td className="btns">
          { !mssn.reserved ? (
            <button
              type="button"
              onClick={() => { handleClick(id, mssn); }}
              className="btn-join"
            >
              Join Mission
            </button>
          ) : (
            <button
              type="button"
              onClick={() => { handleClick(id, mssn); }}
              className="btn-leave"
            >
              Leave Mission
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};
MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mssn: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default MissionItem;

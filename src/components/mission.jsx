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
        <td className="btns">
          <button type="button" className="btn-member">Not A Member</button>
        </td>
        <td className="btns">
          <button
            type="button"
            onClick={() => { handleClick(id, mssn); }}
          >
            Join Mission
          </button>
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

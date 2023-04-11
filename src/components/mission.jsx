import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateState } from '../redux/mission/missionSlice';

const MissionItem = ({ id, name, description }) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr className="column">
        <td><h4>{name}</h4></td>
        <td>{description}</td>
        <td className="btns">
          <button type="button" className="btn-member">Not A Member</button>
        </td>
        <td className="btns">
          <button type="button" onClick={() => dispatch(updateState(id))}>Join Mission</button>
        </td>
      </tr>
    </tbody>
  );
};
MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;

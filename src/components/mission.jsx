import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ name, description }) => (
  <tr>
    <td><h4>{name}</h4></td>
    <td>{description}</td>
    <td className="btns">
      <button type="button" className="btn-member">Not A Member</button>
    </td>
    <td className="btns">
      <button type="button">Join Mission</button>
    </td>
  </tr>
);

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;

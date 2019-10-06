import React from 'react';
import PropTypes from 'prop-types';

const peopleList = (props) => {
  return <div className>{props.name}name people</div>
}
export default peopleList;

peopleList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

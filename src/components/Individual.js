// import React from 'react';
// import { Link } from 'react-router-dom';
import { FaMale, FaFemale, FaDog } from 'react-icons/fa';

const Gender = ({id, name, gender}) => {
  switch(gender) {
    case 'M':
      return <FaMale />;
    case 'F':
      return <FaFemale />;
    case 'P':
      return <FaDog />;
    default:
      break;
  }
}

const Individual = ({ id, name, gender }) => (
  <>
    <span>{name}</span>
    <Gender id={id} name={name} gender={gender} />
  </>
);

export default Individual;

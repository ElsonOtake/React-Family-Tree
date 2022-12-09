import React from 'react';
import { Link } from 'react-router-dom';

const Option = ({
  id, name
}) => {
  console.log("id: ", id, " name: ", name);
  return (
    <Link to={`/details/${id}`}>
      <option value={id}>
        {name}
      </option>
    </Link>
  );
};

export default Option;

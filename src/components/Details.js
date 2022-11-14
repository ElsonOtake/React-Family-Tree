import React from "react"
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  // const requestURL = `https://elsonotake-backend.herokuapp.com/api/v1/users`;
  const requestURL = `http://localhost:3000/api/v1/users`;
  const request = new Request(requestURL);
  fetch(request)
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div>
      <h1>Hello from Tree Leaf ({id})</h1>
    </div>
  )
}

export default Details;

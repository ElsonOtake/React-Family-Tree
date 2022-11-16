import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchLeaf } from '../redux/Details/Details';

const Details = () => {
  const leafData = useSelector((state) => state.leafReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchLeaf(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Hello from Tree Leaf ({id})</h1>
      <p>Id: {leafData.id}</p>
      <p>Name: {leafData.name}</p>
      <p>Gender: {leafData.gender}</p>
      <p>Description: {leafData.description}</p>
      <p>Birth: {leafData.birth}</p>
      <p>Death: {leafData.death}</p>
      <p>Alive: {leafData.alive}</p>
    </div>
  )
}

export default Details;

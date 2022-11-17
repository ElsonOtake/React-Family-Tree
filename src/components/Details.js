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
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">{leafData.name}</h5>
        <p className="card-text">{leafData.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><p>Id: {leafData.id}</p></li>
        <li className="list-group-item"><p>Gender: {leafData.gender}</p></li>
        <li className="list-group-item"><p>Birth: {leafData.birth}</p></li>
        <li className="list-group-item"><p>Death: {leafData.death}</p></li>
        <li className="list-group-item"><p>Alive: {leafData.alive}</p></li>
      </ul>
      {/* <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div> */}
    </div>
  )
}

export default Details;

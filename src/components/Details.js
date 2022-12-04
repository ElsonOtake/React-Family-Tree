import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchLeaf } from '../redux/Details/Details';
import Group from './Group';
import Individual from './Individual';

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
      <div className="card-body">
        <h5 className="card-title"><Individual id={leafData.id} name={leafData.name} gender={leafData.gender} /></h5>
        <p className="card-text">{leafData.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><p>Birth: {leafData.birth}</p></li>
        <li className="list-group-item"><p>Death: {leafData.death}</p></li>
      </ul>
      <Group title='Parents' data={leafData.parents} />
      <Group title='Partners' data={leafData.partner} />
      <Group title='Children' data={leafData.children} />
      <Group title='Siblings' data={leafData.siblings} />
    </div>
  )
}

export default Details;

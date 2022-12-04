import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchLeaf } from '../redux/Details/Details';
// import { Link } from 'react-router-dom';
import Individual from './Individual';

const Parents = ({data}) => {
  console.log('Parents', data);
  if (data.length > 0) {
    return (
      <>
        <h5>Parents</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {/* <Link to={`/details/${data[0].id}`}> */}
              <Individual id={data[0].id} name={data[0].name} gender={data[0].gender} />
            {/* </Link> */}
          </li>
          <li className="list-group-item"><Individual id={data[1].id} name={data[1].name} gender={data[1].gender} /></li>
        </ul>
      </>
    );
  } else {
    return null;
  }
};

const Partners = ({data}) => {
  console.log('Partners', data);
  if (data.length > 0) {
    return (<>
              <h5>Partners</h5>
              <ul>
                {data.map((partner) => {
                  console.log(partner.name);
                  return (<li>
                    <Individual id={partner.id} name={partner.name} gender={partner.gender} />
                  </li>)})}
              </ul>
            </>);
  } else {
    return null;
  }
};

const Children = ({data}) => {
  console.log('Children', data);
  if (data.length > 0) {
    return (<>
              <h5>Children</h5>
              <ul>
                {data.map((child) => {
                  console.log(child.name);
                  return (<li>
                    <Individual id={child.id} name={child.name} gender={child.gender} />
                  </li>)})}
              </ul>
            </>);
  } else {
    return null;
  }
};

const Siblings = ({data}) => {
  console.log('Siblings', data);
  if (data.length > 0) {
    return (<>
              <h5>Siblings</h5>
              <ul>
                {data.map((sibling) => {
                  console.log(sibling.name);
                  return (<li>
                    <Individual id={sibling.id} name={sibling.name} gender={sibling.gender} />
                  </li>)})}
              </ul>
            </>);
  } else {
    return null;
  }
};

const Details = () => {
  const leafData = useSelector((state) => state.leafReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log('id', id);
  console.log('leafData', leafData);
  console.log('leffData.children', leafData.children);
  useEffect(() => {
    dispatch(fetchLeaf(id));
    // console.log('useEffect', leafData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title"><Individual id={leafData.id} name={leafData.name} gender={leafData.gender} /></h5>
        <p className="card-text">{leafData.description}</p>
        {/* { console.log({leafData})} */}
      </div>
      <ul className="list-group list-group-flush">
        {/* <li className="list-group-item"><p>Id: {leafData.id}</p></li> */}
        {/* <li className="list-group-item"><p>Gender: {leafData.gender}</p></li> */}
        <li className="list-group-item"><p>Birth: {leafData.birth}</p></li>
        <li className="list-group-item"><p>Death: {leafData.death}</p></li>
        {/* <li className="list-group-item"><p>Alive: {leafData.alive}</p></li> */}
      </ul>
      <Parents data={leafData.parents} />
      <Partners data={leafData.partner} />
      <Children data={leafData.children} />
      <Siblings data={leafData.siblings} />
      {/* <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div> */}
    </div>
  )
}

export default Details;

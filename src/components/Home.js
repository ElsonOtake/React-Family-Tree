import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTree } from '../redux/Home/Home';
// import Option from './Option';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// const state = {
//   tree: [
//     {
//       id: 1,
//       name: 'Elson Akio Otake',
//     },
//     {
//       id: 2,
//       name: 'Lilian Hiromi Job',
//     },
//     {
//       id: 3,
//       name: 'Tomoyo Job',
//     }
//   ]
// }

const Home = () => {
  const familyTreeData = useSelector((state) => state.treeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (familyTreeData.length === 0) {
      dispatch(fetchTree());
    }
  }, [familyTreeData.length]);
  const [id, setId] = useState('');
  // let tree;

  const handleChange = (e) => {
    setId(e.target.value);
  }

  // const filter = (data) => {
  //   const response = [];
  //   // console.log("data", data, "length", data.length, "data[0]", data[0], "data[0].name", data[0].name);
  //   data.forEach((leaf) => {
  //     response.push({
  //       id: leaf.id,
  //       name: leaf.name,
  //     });
  //   });
  //   // console.log(response);
  //   return response;
  // };

  // const requestURL = `http://localhost:3000/api/v1/users`;
  // const request = new Request(requestURL);
  // fetch(request)
  //   .then((response) => response.json())
  //   // .then ((response) => console.log(response.json()))
  //   .then((data) => tree = filter(data));
  //   // .then((data) => console.log(data));
  //   // .then(console.log(tree));

  return (
    <>
      <h1>Family tree</h1>
      <h2>{id}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formState">
          <Form.Label>Choose a name from the list</Form.Label>
          <Form.Control as="select" name="id" defaultValue={id} onChange={handleChange}>
            {familyTreeData.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Link to={`/details/${id}`}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Link>
      </Form>
    </>
  );
}

export default Home;

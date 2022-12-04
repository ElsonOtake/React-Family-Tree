import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTree } from '../redux/Home/Home';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  const familyTreeData = useSelector((state) => state.treeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (familyTreeData.length === 0) {
      dispatch(fetchTree());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [familyTreeData.length]);
  
  const [id, setId] = useState(1);

  const handleChange = (e) => {
    setId(e.target.value);
  }

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

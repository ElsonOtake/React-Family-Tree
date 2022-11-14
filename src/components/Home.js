import React, { useState } from 'react';
// import Option from './Option';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const state = {
  tree: [
    {
      id: 1,
      name: 'Elson Akio Otake',
    },
    {
      id: 2,
      name: 'Lilian Hiromi Job',
    },
    {
      id: 3,
      name: 'Tomoyo Job',
    }
  ]
}

const Home = () => {
  const [name, setName] = useState(state.tree[2].id);

  const handleChange = (e) => {
    setName(e.target.value);
  }
  // const handleSubmit = (e) => {
  //   console.log(e.target.value);
  //   // console.log('click');
  //   // setName(prevState => prevState);
  // };

  return (
    <>
      <h1>Family tree</h1>
      <h2>{name}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formState">
          <Form.Label>Choose a name from the list</Form.Label>
          <Form.Control as="select" name="name" defaultValue={name} onChange={handleChange}>
            {state.tree.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Link to={`/details/${name}`}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Link>
      </Form>
    </>
  );
}

export default Home;

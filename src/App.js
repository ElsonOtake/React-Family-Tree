import React from 'react';
import TreeLeaf from './components/TreeLeaf';
import './App.css';

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

function App() {
  const onClick = () => {
    return (
      <div>
        <TreeLeaf />
      </div>
    );
  }

  return (
    <>
      <h1>Family tree</h1>
      <form>
        <label className='form-label'>Choose a name from the list</label>
        <input className="form-control" list="names" name="name" id="FamilyTree" placeholder="Type to search..."/>
        <datalist key={state.tree.id} id="names">
          {state.tree.map(t => (
            <option value={t.name} />
          ))}
        </datalist>
        <input type="submit" onClick={onClick}/>
      </form>
    </>
  );
}

export default App;

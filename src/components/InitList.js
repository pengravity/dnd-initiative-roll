import { useEffect, useState } from 'react';

import Data from '../Data';
import InitElement from './InitElement';

const InitList = () => {
  const [listOrder, setListOrder] = useState(Data);
  const [name, setName] = useState('');
  const [init, setInit] = useState('');
  const [id, setId] = useState('');
  const [editing, setEditing] = useState(false);

  const sortByInit = () => {
    setListOrder(
      [...listOrder].sort((a, b) => {
        return b.init - a.init;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please enter name');
    } else if (name && editing) {
      setListOrder(
        listOrder.map((element) => {
          if (element.id === id) {
            return {
              ...element,
              name,
              init,
            };
          }
          return element;
        })
      );
      setName('');
      setInit(0);
      setEditing(false);
      setId(null);
    } else {
      const newElement = {
        id: Date.now(),
        name,
        init: 0,
      };
      setListOrder([...listOrder, newElement]);
      setName('');
      setInit(0);
    }
  };

  const editElement = (id) => {
    const listElement = listOrder.find((element) => element.id === id);

    setEditing(true);
    setId(id);
    setName(listElement.name);
    setInit(listElement.init);
  };

  const handleDeleteElement = (id) => {
    if (window.confirm('Are you sure you want to delete? ') === true) {
      const newList = listOrder.filter((element) => element.id !== id);
      setListOrder(newList);
    }
  };

  return (
    <div className=' --center-all'>
      <h1>Initiative List</h1>
      <form onSubmit={handleSubmit} className='form --form-control'>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            placeholder='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='init'>Init:</label>
          <input
            type='text'
            placeholder='init'
            name='init'
            value={init}
            onChange={(e) => setInit(e.target.value)}
          />
        </div>
        <button className='--btn --btn-success --btn-block'>
          {editing ? 'Edit' : 'Add'}
        </button>
      </form>{' '}
      <button onClick={sortByInit} className='--btn --btn-primary'>
        Sort
      </button>
      {listOrder.map((element) => (
        <InitElement
          key={element.name}
          element={element}
          handleClick={editElement}
          deleteElement={handleDeleteElement}
        />
      ))}
    </div>
  );
};

export default InitList;

import { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

import Data from '../Data';
import InitElement from './InitElement';

const InitList = () => {
  //const [listOrder, setListOrder] = useState(Data);
  const [listOrder, setListOrder] = useLocalStorage('listOrder', [Data]);

  const [name, setName] = useState('');
  const [init, setInit] = useState('');
  const [id, setId] = useState('');
  const [monster, setMonster] = useState(false);
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
        monster,
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

  const handleToggleMonster = (id) => {
    setListOrder(
      listOrder.map((element) => {
        if (element.id === id) {
          if (element.monster === true)
            return {
              ...element,
              monster: false,
            };
          else {
            return { ...element, monster: true };
          }
        }
        return element;
      })
    );
  };

  const rollMonsters = () => {
    setListOrder(
      listOrder.map((element) => {
        if (element.monster === true)
          return {
            ...element,
            init: Math.floor(Math.random() * 20) + 1,
          };

        return element;
      })
    );
  };

  return (
    <div className='flex-container '>
      <h3>Initiative List</h3>
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

        <button className='--btn --btn-success'>
          {editing ? 'Edit' : 'Add'}
        </button>
      </form>{' '}
      <span className='--flex-center'>
        <button onClick={sortByInit} className='--btn --btn-primary'>
          Sort
        </button>
        <button onClick={rollMonsters} className='--btn --btn-danger'>
          Roll
        </button>
      </span>
      {listOrder.map((element) => (
        <InitElement
          key={element.name}
          element={element}
          handleClick={editElement}
          deleteElement={handleDeleteElement}
          toggleMonster={handleToggleMonster}
        />
      ))}
    </div>
  );
};

export default InitList;

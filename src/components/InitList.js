import { useEffect, useState } from 'react';

import Data from '../Data';
import InitElement from './InitElement';

const InitList = () => {
  const [listOrder, setListOrder] = useState(Data);
  const [name, setName] = useState('');
  const [init, setInit] = useState('');
  const [id, setId] = useState('');

  const sortByInit = () => {
    setListOrder(
      [...listOrder].sort((a, b) => {
        return b.init - a.init;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWarrior = {
      id: Date.now(),
      name,
      init,
    };
    setListOrder([...listOrder, newWarrior]);
    setName('');
    setInit('');
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
            //  value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='init'>Init:</label>
          <input
            type='text'
            placeholder='init'
            name='init'
            // value={date}
            onChange={(e) => setInit(e.target.value)}
          />
        </div>
        <button className='--btn --btn-success --btn-block'>Add</button>
      </form>{' '}
      <button onClick={sortByInit} className='--btn --btn-primary'>
        Sort
      </button>
      {listOrder.map((element) => (
        <InitElement key={element.name} element={element} />
      ))}
    </div>
  );
};

export default InitList;

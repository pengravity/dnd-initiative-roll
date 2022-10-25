import { useEffect, useState } from 'react';

import Data from '../Data';
import InitElement from './InitElement';

const InitList = () => {
  const [listOrder, setListOrder] = useState(Data);

  const sortByInit = () => {
    setListOrder(
      [...listOrder].sort((a, b) => {
        return b.init - a.init;
      })
    );
  };

  return (
    <div className='container'>
      <h1>Initiative List</h1>
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

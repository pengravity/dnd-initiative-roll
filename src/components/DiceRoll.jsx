import React, { useState } from 'react';
import { useEffect } from 'react';

const DiceRoll = () => {
  const [noOfDices, setNoOfDices] = useState(4);
  const [dicesSides, setDicesSides] = useState(20);
  const [dicesRolls, setDicesRolls] = useState([]);

  let dices = [];

  const rollDices = () => {
    dices = [];
    console.log(noOfDices, dicesSides);
    for (let i = 0; i < noOfDices; i++) {
      dices.push(Math.floor(Math.random() * dicesSides) + 1);
    }
    setDicesRolls(dices);
    // console.log(dicesRolls);
    // console.log(noOfDices, dicesSides);
    // console.log(sumRolls);
    sumRolls();
  };

  const sortRolls = () => {
    setDicesRolls(
      [...dicesRolls].sort((a, b) => {
        return b - a;
      })
    );
  };

  const sumRolls = (arrayOfDices) => {
    let initialValue = 0;
    let sum = dicesRolls.reduce((totalValue, currentValue) => {
      console.log(`totalValue: ${totalValue}, currentValue: ${currentValue}`);
      return totalValue + currentValue;
    }, initialValue);
    console.log('sum', sum);
    return sum;
  };

  //   useEffect(() => {
  //     sumRolls();
  //   }, [dicesRolls]);

  return (
    <>
      <div className='flex-container'>
        <h3>Dices Roll</h3>
        <form className='form --form-control'>
          <div>
            <label>Number of Dices</label>
            <input
              type='number'
              placeholder='number of dices'
              name='noOfDices'
              value={noOfDices}
              onChange={(e) => setNoOfDices(e.target.value)}
            />
          </div>
          <div>
            <label>Dices Sides: </label>
            <input
              type='number'
              placeholder='dices sides'
              name='dicesSides'
              value={dicesSides}
              onChange={(e) => setDicesSides(e.target.value)}
            />
          </div>
        </form>
        <button onClick={rollDices} className='--btn --btn-primary'>
          Roll Dice
        </button>
        <button onClick={sortRolls} className='--btn --btn-danger'>
          Sort Rolls
        </button>
        <ul>
          {dicesRolls.map((dice, i) => (
            <div key={i} className='--ml2'>
              {' '}
              <h4>{dice}</h4>
            </div>
          ))}
          <h4>Sum: {sumRolls(dicesRolls)} </h4>
        </ul>
      </div>
    </>
  );
};

export default DiceRoll;

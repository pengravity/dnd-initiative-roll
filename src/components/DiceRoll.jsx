import React, { useState } from 'react';
import { useEffect } from 'react';

const DiceRoll = () => {
  const [noOfDices, setNoOfDices] = useState(4);
  const [dicesSides, setDicesSides] = useState(20);
  const [dicesRolls, setDicesRolls] = useState([]);

  let dices = [];

  const rollDices = () => {
    dices = [];
    for (let i = 0; i < noOfDices; i++) {
      dices.push(Math.floor(Math.random() * dicesSides) + 1);
    }
    setDicesRolls(dices);

    sumRolls();
  };

  const rollDicesAdvantage = () => {
    dices = [];
    for (let i = 0; i < noOfDices; i++) {
      let roll1, roll2;
      roll1 = Math.floor(Math.random() * dicesSides) + 1;
      roll2 = Math.floor(Math.random() * dicesSides) + 1;
      roll1 > roll2 ? dices.push(roll1) : dices.push(roll2);
    }
    setDicesRolls(dices);

    sumRolls();
  };

  const rollDicesDisadvantage = () => {
    dices = [];
    for (let i = 0; i < noOfDices; i++) {
      let roll1, roll2;
      roll1 = Math.floor(Math.random() * dicesSides) + 1;
      roll2 = Math.floor(Math.random() * dicesSides) + 1;
      roll1 < roll2 ? dices.push(roll1) : dices.push(roll2);
    }
    setDicesRolls(dices);

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
      return totalValue + currentValue;
    }, initialValue);
    return sum;
  };

  return (
    <>
      <div className='flex-container'>
        <h3 className='--flex-center'>Dices Roll</h3>
        <form className='form --form-control '>
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
        <span className='--flex-center'>
          <button onClick={rollDices} className='--btn --btn-primary'>
            Roll Dice
          </button>
          <button onClick={rollDicesAdvantage} className='--btn --btn-success'>
            Roll Adv
          </button>
          <button
            onClick={rollDicesDisadvantage}
            className='--btn --btn-purple'
          >
            Roll Dis
          </button>
          <button onClick={sortRolls} className='--btn --btn-danger'>
            Sort Rolls
          </button>
        </span>
        <ul>
          {dicesRolls.map((dice, i) => (
            <div key={i} className='--ml2'>
              {' '}
              <h4>{`${i + 1}:  ${dice}`}</h4>
            </div>
          ))}
          <h4>Sum: {sumRolls(dicesRolls)} </h4>
          <h4>Avg: {(sumRolls(dicesRolls) / dicesRolls.length).toFixed(2)} </h4>
        </ul>
      </div>
    </>
  );
};

export default DiceRoll;

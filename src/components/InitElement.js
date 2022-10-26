import { RiDeleteBin5Fill } from 'react-icons/ri';
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';

const InitElement = ({
  element,
  handleClick,
  deleteElement,
  toggleMonster,
}) => {
  return (
    <div className='--card '>
      <div
        className={`${
          element.monster ? 'monster' : 'player'
        } --flex-between --p`}
      >
        <span>
          <RiDeleteBin5Fill
            onClick={() => deleteElement(element.id)}
            className='--pointer'
          />{' '}
          <BsToggleOff
            onClick={() => toggleMonster(element.id)}
            className='--pointer'
          />
        </span>
        <span onClick={() => handleClick(element.id)} className='--pointer'>
          {element.name}
        </span>
        <span className=''>{element.init}</span>
      </div>
    </div>
  );
};

export default InitElement;

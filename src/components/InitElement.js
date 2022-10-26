import { RiDeleteBin5Fill } from 'react-icons/ri';

const InitElement = ({ element, handleClick, deleteElement }) => {
  return (
    <div className='--card '>
      <div
        className={`${
          element.player ? 'player' : 'monster'
        } --flex-between --p`}
      >
        <span>
          <RiDeleteBin5Fill onClick={() => deleteElement(element.id)} />{' '}
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

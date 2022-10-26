const InitElement = ({ element, handleInitClick }) => {
  return (
    <div className='--card '>
      <div
        className={`${
          element.player ? 'player' : 'monster'
        } --flex-between --p2`}
      >
        <span className='--pointer'>{element.name}</span>
        <span onClick={() => handleInitClick(element.id)} className='--pointer'>
          {element.init}
        </span>
      </div>
    </div>
  );
};

export default InitElement;

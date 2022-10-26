const InitElement = ({ element, handleClick }) => {
  return (
    <div className='--card ' onClick={() => handleClick(element.id)}>
      <div
        className={`${
          element.player ? 'player' : 'monster'
        } --flex-between --p`}
      >
        <span className='--pointer'>{element.name}</span>
        <span className='--pointer'>{element.init}</span>
      </div>
    </div>
  );
};

export default InitElement;

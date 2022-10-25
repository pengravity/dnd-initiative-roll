const InitElement = ({ element }) => {
  return (
    <div className='--card '>
      <div className='--block'>
        <div>{element.name}</div>
        <div>{element.init}</div>
      </div>
    </div>
  );
};

export default InitElement;

const Button = (props) => {
  return (
    <button
      className='btn'
      onClick={() => props.getStatePopap(props.statePopap ? false : true)}>
      Invest
    </button>
  );
};

export default Button;

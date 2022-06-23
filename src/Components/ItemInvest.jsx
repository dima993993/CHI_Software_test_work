import Button from "./Button";

const ItemInvest = (props) => {
  return (
    <div className='wrapper_item'>
      <div className='text_item'>
        <div>{props.tranche}</div>
        <div>
          <p>
            <span>available: </span>
            {props.available}
          </p>
          <p>
            <span>annualised_return: </span>
            {props.annualised_return}
          </p>
          <p>
            <span>term_remaining: </span>
            {props.term_remaining}
          </p>
          <p>
            <span>ltv: </span>
            {props.ltv}
          </p>
          <p>
            <span>amount: </span>
            {props.amount}
          </p>
        </div>
      </div>
      <div>
        <Button
          getStatePopap={props.getStatePopap}
          statePopap={props.statePopap}
        />
      </div>
    </div>
  );
};
export default ItemInvest;

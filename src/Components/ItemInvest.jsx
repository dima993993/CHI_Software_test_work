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
            <span>ltv: </span>
            {props.ltv}
          </p>
          <p>
            <span>amount: </span>
            {props.amount}
          </p>
        </div>
      </div>
      <div className='btn_block'>
        {props.invested ? (
          <div className='invested'>Invested</div>
        ) : (
          <div></div>
        )}
        <div
          onClick={() => {
            props.getElementId(props.id);
            props.openPopap(true);
          }}>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default ItemInvest;

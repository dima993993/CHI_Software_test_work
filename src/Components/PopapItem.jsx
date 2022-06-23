import Button from "./Button";

const PopapItem = (props) => {
  return (
    <div className='popap_wrapper'>
      <div className='popap'>
        <div className='close_popap' onClick={() => props.getStatePopap(false)}>
          X
        </div>
        <div className='name_popap'>Invest in Loan</div>
        <div className='text_popap'>
          <div>title</div>
          <div>
            <p>
              Amount available: <span>$ 12000</span>
            </p>
            <p>
              Loan ends: <span>1 month 10 days</span>
            </p>
          </div>
        </div>
        <div className='title_investment_amount'>Investment amount</div>
        <div className='field_loan'>
          <input type='text' placeholder='1000' />
          <Button />
        </div>
      </div>
    </div>
  );
};
export default PopapItem;

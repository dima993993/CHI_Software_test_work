import Button from "./Button";

const PopapItem = (props) => {
  let data = props.searchObjectInId[0];
  let countOfDays = data.term_remaining / 60 / 24;
  let month = countOfDays / 30;
  let numArr = month.toString().split(".");
  let days =
    numArr[1] != undefined ? Math.floor((numArr[1][0] / 30) * 100) : null;
  return (
    <div className='popap_wrapper'>
      <div className='popap'>
        <div className='close_popap' onClick={() => props.getStatePopap(false)}>
          X
        </div>
        <div className='name_popap'>Invest in Loan</div>
        <div className='text_popap'>
          <div>{data.title}</div>
          <div>
            <p>
              Amount available: <span>$ {data.amount}</span>
            </p>
            <p>
              Loan ends:{" "}
              <span>
                {`${numArr[0]} month`} {days ? `${days} days` : ""}
              </span>
            </p>
          </div>
        </div>
        <div className='title_investment_amount'>Investment amount</div>
        <div className='field_loan'>
          <input type='text' placeholder='1000' />
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopapItem;

import Button from "./Button";

const PopapItem = (props) => {
  let countOfDays = props.term_remaining / 60 / 24;
  let month = countOfDays / 30;
  let numArr = month.toString().split(".");
  let days =
    numArr[1] != undefined ? Math.floor((numArr[1][0] / 30) * 100) : null;
  return (
    <div className='popap_wrapper'>
      <div className='popap'>
        <div
          className='close_popap'
          onClick={() => {
            props.closePopap(false);
          }}>
          X
        </div>
        <div className='name_popap'>Invest in Loan</div>
        <div className='text_popap'>
          <div></div>
          <div>
            <p>
              Amount available: <span>$ {props.available}</span>
            </p>
            <p>
              Loan ends:
              <span>
                {` ${numArr[0]} month`}
                {numArr[1] != undefined ? ` ${days} days` : ""}
              </span>
            </p>
          </div>
        </div>
        <div className='title_investment_amount'>Investment amount</div>
        <div className='field_loan'>
          <input
            type='text'
            placeholder='1000'
            onChange={(e) =>
              props.getInputText(e.target.value.replace(/[^\d]/g, ""))
            }
            value={props.textValue}
          />
          <div
            onClick={() => {
              props.totalCount();
              props.addInvested(props.id);
              props.getInputText("");
              props.closePopap(false);
            }}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopapItem;

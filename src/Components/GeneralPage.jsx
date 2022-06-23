import ItemInvest from "./ItemInvest";
const GeneralPage = (props) => {
  return (
    <div className='general_page'>
      <div className='title_general_page'>Current Loans</div>
      <div className='wrapper_item_invest'>
        {props.loans.map((el) => (
          <ItemInvest
            key={el.id}
            getStatePopap={props.getStatePopap}
            statePopap={props.statePopap}
            {...el}
          />
        ))}
        <div className='total_amount'>
          <div>Total amount available for invastment:</div>
          <div>
            238 <span>$</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralPage;

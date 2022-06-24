import ItemInvest from "./ItemInvest";
const GeneralPage = (props) => {
  return (
    <div className='general_page'>
      <div className='title_general_page'>Current Loans</div>
      <div className='wrapper_item_invest'>
        {props.loans.map((el) => (
          <ItemInvest
            key={el.id}
            {...el}
            openPopap={props.getTogglePopap}
            getElementId={props.getElementId}
            textValue={props.textValue}
            {...props.loans}
          />
        ))}
        <div className='total_amount'>
          <div>Total amount available for invastment:</div>
          <div>
            {props.totalAmountInvestment} <span>$</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralPage;

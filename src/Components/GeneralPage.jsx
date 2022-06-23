import ItemInvest from "./ItemInvest";
let arr = [1, 2, 3];
const GeneralPage = () => {
  return (
    <div className='general_page'>
      <div className='title_general_page'>Current Loans</div>
      <div className='wrapper_item_invest'>
        {arr.map((el) => (
          <ItemInvest key={el} />
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

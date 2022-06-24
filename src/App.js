import "./App.css";
import GeneralPage from "./Components/GeneralPage";
import PopapItem from "./Components/PopapItem";
import { connect } from "react-redux/es/exports";
import {
  getElementId,
  getInputText,
  getTogglePopap,
  addInvested,
  totalCount,
} from "./Redux/reducer";

const App = (props) => {
  return (
    <div className='App'>
      {props.statePopap ? (
        <PopapItem
          closePopap={props.getTogglePopap}
          getInputText={props.getInputText}
          totalCount={props.totalCount}
          addInvested={props.addInvested}
          {...props.currentLoan}
        />
      ) : null}
      <GeneralPage {...props} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    loans: state.myReducer.loans,
    statePopap: state.myReducer.statePopap,
    currentLoan: state.myReducer.currentLoan,
    totalAmountInvestment: state.myReducer.totalAmountInvestment,
    textValue: state.myReducer.textValue,
  };
};
let AppContainer = connect(mapStateToProps, {
  getTogglePopap,
  getElementId,
  getInputText,
  totalCount,
  addInvested,
})(App);
export default AppContainer;

// let [statePopap, getStatePopap] = useState(false); // Local state for Open or Close Popap
// let [currentLoan, getCurrentLoan] = useState(null); // Local state Search object id for popap
// let [available, getAvailable] = useState(10000);

// // Searching id
// let newState = () => {
//   if(currentLoan != null) {
//     return {
//       ...props.loans,

//     }
//   }
// }
// // let searchObjectInId = props.loans.filter((el) =>
// //   el.id == currentLoan ? el : ""
// // );
// // let newAvialable = () => {
// //   if (searchObjectInId != "") {
// //     let num = searchObjectInId[0].available.split(",").join("");
// //     return {
// //       ...searchObjectInId[0],
// //       available: +num - +available,
// //     };
// //   }
// // };
// // console.log(newAvialable());
// window.store = { ...props, statePopap, currentLoan }; // Global object

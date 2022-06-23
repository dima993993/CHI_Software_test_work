import { useState } from "react";
import "./App.css";
import GeneralPage from "./Components/GeneralPage";
import PopapItem from "./Components/PopapItem";
const App = (props) => {
  let [statePopap, getStatePopap] = useState(false); // Local state for Open or Close Popap
  let [currentLoan, getCurrentLoan] = useState(null); // Local state Search object id for popap
  window.store = { ...props, statePopap, currentLoan }; // Global object
  // Searching id
  const searchObjectInId = props.loans.filter((el) =>
    el.id == currentLoan ? el : ""
  );
  return (
    <div className='App'>
      {statePopap ? (
        <PopapItem
          getStatePopap={getStatePopap}
          searchObjectInId={searchObjectInId}
        />
      ) : (
        ""
      )}
      <GeneralPage
        getStatePopap={getStatePopap}
        statePopap={statePopap}
        getCurrentLoan={getCurrentLoan}
        {...props}
      />
    </div>
  );
};

export default App;

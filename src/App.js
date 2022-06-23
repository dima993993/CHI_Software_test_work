import { useState } from "react";
import "./App.css";
import GeneralPage from "./Components/GeneralPage";
import PopapItem from "./Components/PopapItem";
const App = (props) => {
  let [statePopap, getStatePopap] = useState(false);
  return (
    <div className='App'>
      {statePopap ? <PopapItem getStatePopap={getStatePopap} /> : ""}
      <GeneralPage
        getStatePopap={getStatePopap}
        statePopap={statePopap}
        {...props}
      />
    </div>
  );
};

export default App;

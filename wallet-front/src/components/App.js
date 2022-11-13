import React, { useEffect } from "react";
import Navi from "./Navi";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddAccount from "./AddAccount";
import AccountList from "./AccountList";
import { useDispatch } from "react-redux";
import { onGetAllData } from "../redux/actionCreators/onGetAllData";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetAllData());
  }, []);
  return (
    <div style={{ backgroundColor: "#FF8C00" }}>
      <Navi />
      <div className="mt-3 bg-info p-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/accounts" component={AccountList} />
          <Route exact path="/addAccount" component={AddAccount} />
        </Switch>
      </div>
    </div>
  );
}
export default App;

import React from "react";

// router
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styling

// components
import Menu from "./../Menu/Menu";
import Login from "./Login";
import Registernew from "./Registernew";

const Loginregister = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* dropdown menu */}
        <Menu />
        {/* routes */}
        <Switch>
          <Route exact path="/register" component={Registernew} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={null} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Loginregister;

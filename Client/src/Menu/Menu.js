import React, { useState } from "react";

// router
import { withRouter } from "react-router-dom";

// styling
import "./Menu.css";

const Menu = (props) => {
  // conditionally render dropdown affect based on this boolean
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  // parameter num corresponds to .open-# classes
  // is assigned when Menu clicked triggering animated dropdown
  const setClassNames = (num) => {
    // console.log(num);
    const classArr = ["m-item"];
    if (openMenu) classArr.push(`open-${num}`);
    return classArr.join(" ");
  };

  const setClassNames1 = (num) => {
    // console.log(num);
    const classArr = ["m-item1"];
    if (openMenu1) classArr.push(`open-${num}`);
    return classArr.join(" ");
  };

  const setClassNames2 = (num) => {
    // console.log(num);
    const classArr = ["m-item2"];
    if (openMenu2) classArr.push(`open-${num}`);
    return classArr.join(" ");
  };

  // takes route string as parameter
  const pushToRoute = (route) => {
    props.history.push(route);
    setOpenMenu(false);
    setOpenMenu1(false);
    setOpenMenu2(false);
  };

  return (
    <div style={{ display: "flex", gap: "160px" }} className="margin">
      <div className="Menu">
        <div className={"m-item m-logo"} onClick={() => setOpenMenu(!openMenu)}>
          ADMIN
        </div>
        <div className={setClassNames(1)} onClick={() => pushToRoute("/login")}>
          Login As Existing
        </div>
        <div
          className={setClassNames(2)}
          onClick={() => pushToRoute("/register")}
        >
          Register As New
        </div>
        {/* <div className={setClassNames(3)} onClick={() => pushToRoute("/")}>
          Sign out
        </div> */}
      </div>

      <div className="Menu">
        <div
          className={"m-item1 m-logo"}
          onClick={() => setOpenMenu1(!openMenu1)}
        >
          DONOR
        </div>
        <div
          className={setClassNames1(11)}
          onClick={() => pushToRoute("/login")}
        >
          Login As Existing
        </div>
        <div
          className={setClassNames1(12)}
          onClick={() => pushToRoute("/register")}
        >
          Register As New
        </div>
        {/* <div className={setClassNames1(13)} onClick={() => pushToRoute("/")}>
          Sign out
        </div> */}
      </div>

      <div className="Menu">
        <div
          className={"m-item2 m-logo"}
          onClick={() => setOpenMenu2(!openMenu2)}
        >
          AGENT
        </div>
        <div
          className={setClassNames2(21)}
          onClick={() => pushToRoute("/login")}
        >
          Login As Existing
        </div>
        <div
          className={setClassNames2(22)}
          onClick={() => pushToRoute("/register")}
        >
          Register As New
        </div>
        {/* <div className={setClassNames2(23)} onClick={() => pushToRoute("/")}>
          Sign out
        </div> */}
      </div>
    </div>
  );
};

export default withRouter(Menu);

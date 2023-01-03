import user from "./img/user.png";
import edit from "./img/edit.png";
import inbox from "./img/envelope.png";
import settings from "./img/settings.png";
import help from "./img/question.png";
import logout from "./img/log-out.png";
import "./profile.css";
import Loading from "../../Pages/Loading";

import React, { useState, useEffect, useRef } from "react";

function Userprofile() {
  const [userf, setUser] = useState([
    { user: { name: "user", address: "address" } },
  ]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userfind = async () => {
      setLoading(true);
      const currentuser = await fetch("/api/v1/users/me/");
      const current = await currentuser.json();
      setUser(current);
      console.log("findinguser", current);
      setLoading(false);
    };
    userfind();
  }, []);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={user} alt={"user"}></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>
            Donar
            {/* {userf ? userf.user.name : "dfvfsd"} */}
            <br />
            <span>
              {/* {userf.user.address} */}
              Salem
            </span>
          </h3>
          <ul>
            <DropdownItem img={user} text={"My Profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Inbox"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Helps"} />
            <DropdownItem onClick={"gfd"} img={logout} text={"Logout"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt={"img"}></img>
      <a href="/"> {props.text} </a>
    </li>
  );
}

export default Userprofile;

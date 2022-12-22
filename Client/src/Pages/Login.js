import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    type: "Admin",
  });

  const Navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    const login = async (email, password, type) => {
      const response = await fetch("/api/v1/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          role: type,
        }),
      });

      const json = await response.json();
      console.log(response);
      if (json.status === "sucess") {
        // alert(type);
        if (type === "Admin") {
          Navigate("/Adminpage");
        } else if (type === "Donar") {
          Navigate("/Donarpage");
        } else if (type === "User") {
          Navigate("/Adminpage");
        }
      } else if (json.status === "fail") {
        console.log("Failed !!!");
        alert(json.message);
      }
    };

    login(userData.email, userData.password, userData.type);
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="app-wrapper">
          <div>
            <h2 className="title">Login</h2>
          </div>
          <form className="form-wrapper" onSubmit={onSubmit}>
            <div className="email">
              <label className="label">Type</label>
              <select
                name="type"
                onChange={(e) => changeHandler(e)}
                value={changeHandler.type}
              >
                <option value="Admin">Admin</option>
                <option value="Donar">Donar</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                onChange={(e) => changeHandler(e)}
                value={changeHandler.email}
              />
            </div>
            <div className="password">
              <label className="label">password</label>
              <input
                className="input"
                name="password"
                type="password"
                onChange={(e) => changeHandler(e)}
                value={changeHandler.password}
              />
            </div>
            <div>
              <button className="submit" value="Submit">
                Sign In
              </button>
            </div>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Navigate("/Registernew");
            }}
          >
            <label>New user ? </label>
            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

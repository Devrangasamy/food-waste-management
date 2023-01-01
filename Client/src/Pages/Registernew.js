import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Registernew = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    age: "",
    birthdate: "",
    phonenumber: "",
    gender: "",
    address: "",
    typelogin: "",
  });

  const Navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (userData.username === "") {
      alert("Enter username");
      return "";
    } else if (userData.username.length < 8) {
      alert("Username should be greater than 8");
      return "";
    }

    if (!userData.email) {
      alert("Email Required");
      return "";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)
    ) {
      alert("Invalid email address");
      return "";
    }

    if (!userData.password) {
      alert("Password Required");
      return "";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
        userData.password
      )
    ) {
      alert("Provide Strong Password");
      return "";
    }
    if (!userData.passwordConfirm) {
      alert("Conform Password Required");
      return "";
    } else if (userData.password !== userData.passwordConfirm) {
      alert("Password and Conform password should be same");
      return "";
    }
    if (userData.age === "") {
      alert("Please provide age");
      return "";
    }
    if (userData.birthdate === "") {
      alert("Please provide DOB");
      return "";
    }
    if (userData.phonenumber === "") {
      alert("Please provide Mobile number");
      return "";
    }
    if (userData.address === "") {
      alert("Please provide Address");
      return "";
    }
    if (userData.gender === "") {
      alert("Please choose Gender");
      return "";
    }
    const login = async (userData) => {
      // console.log(userData);
      const response = await fetch(
        "http://127.0.0.1:3000/api/v1/users/signup/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: userData.username,
            email: userData.email,
            role: userData.typelogin,
            password: userData.password,
            passwordConfirm: userData.passwordConfirm,
            age: userData.age,
            birthdate: userData.birthdate,
            phonenumber: userData.phonenumber,
            gender: userData.gender,
            address: userData.address,
          }),
        }
      );
      const json = await response.json();
      // console.log(json);
      alert(json.status);

      if (json.status === "sucess") {
        Navigate("/loginregister");
      }
    };
    login(userData);
  };

  // const response = await fetch("http://127.0.0.1:3000/api/v1/users/signup/", {
  //   method: "POST",
  //   body: JSON.stringify({ registered }),
  // });
  // alert(await response.json());
  // axios
  //   .post("http://localhost:3000/api/v1/users/signup", registered)
  //   .then((response) => {
  //     alert(response.data.status);
  //     console.log(response);
  //   });

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div className="name">
            <div className="gender">
              <label className="label">Login Type:</label>
              <input
                onChange={(e) => changeHandler(e)}
                type="radio"
                value="User"
                name="typelogin"
                className="radi"
              />{" "}
              User
              <input
                onChange={(e) => changeHandler(e)}
                type="radio"
                value="Donar"
                name="typelogin"
                className="radi"
              />{" "}
              Donar
            </div>

            <label className="label">User name</label>
            <input
              className="input"
              type="text"
              name="username"
              onChange={(e) => changeHandler(e)}
              value={changeHandler.username}
            />
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
              type="password"
              name="password"
              onChange={(e) => changeHandler(e)}
              value={changeHandler.password}
            />
          </div>
          <div className="password">
            <label className="label">Confirm password</label>
            <input
              className="input"
              type="password"
              name="passwordConfirm"
              onChange={(e) => changeHandler(e)}
              value={changeHandler.passwordConfirm}
            />
          </div>
          <div className="num">
            <label className="label">Age</label>
            <input
              className="input"
              type="number"
              name="age"
              onChange={(e) => changeHandler(e)}
              value={changeHandler.age}
            />
          </div>
          <div className="num">
            <label className="label">Birth date</label>
            <input
              type="text"
              className="input"
              name="birthdate"
              onChange={(e) => changeHandler(e)}
              value={changeHandler.birthdate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
          <div className="name">
            <label className="label">Phone Number</label>
            <input
              className="input"
              type="text"
              name="phonenumber"
              onChange={(e) => changeHandler(e)}
              value={changeHandler.phonenumber}
            />
          </div>
          <div className="gender">
            <label className="label">Gender:</label>
            <input
              onChange={(e) => changeHandler(e)}
              type="radio"
              value="Male"
              name="gender"
              className="radi"
            />{" "}
            Male
            <input
              onChange={(e) => changeHandler(e)}
              type="radio"
              value="Female"
              name="gender"
              className="radi"
            />{" "}
            Female
            <input
              onChange={(e) => changeHandler(e)}
              type="radio"
              value="Other"
              name="gender"
              className="radi"
            />{" "}
            Other
          </div>
          <div className="name">
            <label className="label">Address</label>
            <input
              className="input"
              type="textarea"
              name="address"
              onChange={(e) => changeHandler(e)}
              value={changeHandler.address}
            />
          </div>

          <div>
            <button className="submit" value="Submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registernew;

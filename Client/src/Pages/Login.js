// import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// // import { Link, useNavigate } from "react-router-dom";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./LoginScreen.css";

// import ButtonPrimary from "../components/ButtonPrimary";
// import CountriesDropdown from "../components/CountriesDropdown";
// import useLogin from "../controllers/useLogin";
// import DoctorImage from "../assets/undraw_doctors_hwty.svg";
import { useState } from "react";
// import Loading from "./Loading";

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
    // const navigate = useNavigate();

    const login = async (email, password, type) => {
      // setLoading(true);
      const response = await fetch(
        "http://127.0.0.1:3000/api/v1/users/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        }
      );

      const json = await response.json();
      console.log(json);
      if (json.status === "sucess") {
        alert(type);
        if (type === "Admin") {
          Navigate("/Adminpage");
        } else if (type === "Donar") {
          Navigate("/Donarpage");
        } else if (type == "User") {
          Navigate("/Adminpage");
        }
      } else if (json.status === "fail") {
        alert(email + password + json.message);
      }
    };

    login(userData.email, userData.password, userData.type);
  };

  // const Login = () => {
  //   // const { login, error, isLoading } = useLogin();

  //   const [userData, setUserData] = useState({ email: "", password: "" });
  //   const [passwordView, setPasswordView] = useState(true);
  //   const [disabled, setDisabled] = useState(false);

  //   const navigate = useNavigate();

  //   const [err, setError] = useState({
  //     error: false,
  //     message: "",
  //   });

  // const login = async (email, password) => {
  //         // setLoading(true);
  //         const response = await fetch(
  //           "http://127.0.0.1:3000/api/v1/users/login/",
  //           {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({ email: email, password: password }),
  //           }
  //         );

  //         const json = await response.json();
  //         console.log(json);
  //         if (json.status === "sucess") {
  //           // alert("loginSuccessfully");
  //           navigate("/dashboard");
  //         } else if (json.status === "fail") {
  //           alert(json.message);
  //         }
  //       };

  // const login = async (email, password) => {
  //   // setLoading(true);
  //   const response = await fetch("/api/v1/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email: email, password: password }),
  //   });

  //   const json = await response.json();
  //   if (!response.ok) {
  //     setError({ error: true, message: json.message });
  //     setDisabled(false);
  //   }

  //   if (response.ok) {
  //     navigate("/streams");
  //   }
  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   if (userData.email === "" || userData.password === "") {
  //     setError({ error: true, message: "Please Fill All The Fields" });
  //     return;
  //   }
  //   setDisabled(true);
  //   // login(userData.email, userData.password);
  // };

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
        </div>
      </div>
    </div>
  );
};

export default Login;

// class Login extends Component {
//   constructor() {
//     super();
//     const navigate=useNavigate();

//     this.state = {
//       email: "",
//       password: "",
//     };

//     this.changeemail = this.changeemail.bind(this);
//     this.changepassword = this.changepassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   changeemail(event) {
//     this.setState({
//       email: event.target.value,
//     });
//   }
//   changepassword(event) {
//     this.setState({
//       password: event.target.value,
//     });
//   }

//   onSubmit(event) {
//     event.preventDefault();

//     const registered = {
//       email: this.state.email,
//       password: this.state.password,
//     };
//     const login = async (email, password) => {
//       // setLoading(true);
//       const response = await fetch(
//         "http://127.0.0.1:3000/api/v1/users/login/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email: email, password: password }),
//         }
//       );

//       const json = await response.json();
//       console.log(json);
//       if (json.status === "sucess") {
//         // alert("loginSuccessfully");
//         navigate("/dashboard");
//       } else if (json.status === "fail") {
//         alert(json.message);
//       }
//     };

//     login(registered.email, registered.password);
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="app-wrapper">
//           <div>
//             <h2 className="title">Login</h2>
//           </div>
//           <form className="form-wrapper" onSubmit={this.onSubmit}>
//             <div className="email">
//               <label className="label">Email</label>
//               <input
//                 className="input"
//                 type="email"
//                 onChange={this.changeemail}
//                 value={this.state.email}
//               />
//             </div>
//             <div className="password">
//               <label className="label">password</label>
//               <input
//                 className="input"
//                 type="password"
//                 onChange={this.changepassword}
//                 value={this.state.password}
//               />
//             </div>
//             <div>
//               <button className="submit" value="Submit">
//                 Sign In
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;

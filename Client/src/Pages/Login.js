import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      email: this.state.email,
      password: this.state.password,
    };
    const login = async (email, password) => {
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
        alert("loginSuccessfully");
        // navigate("/dashboard");
      } else if (json.status === "fail") {
        alert(json.message);
      }
    };

    login(registered.email, registered.password);
  }
  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <h2 className="title">Login</h2>
          </div>
          <form className="form-wrapper" onSubmit={this.onSubmit}>
            <div className="email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                onChange={this.changeemail}
                value={this.state.email}
              />
            </div>
            <div className="password">
              <label className="label">password</label>
              <input
                className="input"
                type="password"
                onChange={this.changepassword}
                value={this.state.password}
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
    );
  }
}

export default Login;

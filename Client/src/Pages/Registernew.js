import React, { Component } from "react";
import axios from "axios";

class Registernew extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      age: "",
      birthdate: "",
      phonenumber: "",
      gender: "",
      address: "",
    };
    this.changename = this.changename.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.changepasswordConfirm = this.changepasswordConfirm.bind(this);
    this.changeage = this.changeage.bind(this);
    this.changebirthdate = this.changebirthdate.bind(this);
    this.changephonenumber = this.changephonenumber.bind(this);
    this.changegender = this.changegender.bind(this);
    this.changeaddress = this.changeaddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changename(event) {
    this.setState({
      name: event.target.value,
    });
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
  changepasswordConfirm(event) {
    this.setState({
      passwordConfirm: event.target.value,
    });
  }
  changeage(event) {
    this.setState({
      age: event.target.value,
    });
  }
  changebirthdate(event) {
    this.setState({
      birthdate: event.target.value,
    });
  }
  changephonenumber(event) {
    this.setState({
      phonenumber: event.target.value,
    });
  }
  changegender(event) {
    this.setState({
      gender: event.target.value,
    });
  }
  changeaddress(event) {
    this.setState({
      address: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      age: this.state.age,
      birthdate: this.state.birthdate,
      phonenumber: this.state.phonenumber,
      gender: this.state.gender,
      address: this.state.address,
    };
    axios
      .post("http://localhost:3000/api/v1/users/signup", registered)
      .then((response) => console.log(response.data));
    this.setState({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      age: "",
      birthdate: "",
      phonenumber: "",
      gender: "",
      address: "",
    });
  }

render(){
  return (
    <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>
                        Create Account
                    </h2>
                </div>
                <form className='form-wrapper' onSubmit={this.onSubmit} >
                    <div className='name'>
                        <label className='label'>User name</label>
                        <input className='input' type="text" onChange={this.changename} value={this.state.name}/>
                    </div>
                    <div className='email'>
                        <label className='label'>Email</label>
                        <input className='input' type="email" onChange={this.changeemail} value={this.state.email}/>
                    </div>
                    <div className='password'>
                        <label className='label'>password</label>
                        <input className='input' type="password" onChange={this.changepassword} value={this.state.password}/>
                    </div>
                    <div className='password'>
                        <label className='label'>Confirm password</label>
                        <input className='input' type="password" onChange={this.changepasswordConfirm} value={this.state.passwordConfirm}/>
                    </div>
                    <div className='num'>
                        <label className='label'>Age</label>
                        <input className='input' type="number" onChange={this.changeage} value={this.state.age}/>
                    </div>
                    <div className='num'>
                        <label className='label'>Birth date</label>
                        <input
                            type="text"
                            className='input'
                            onChange={this.changebirthdate} value={this.state.birthdate}
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                    <div className='name'>
                        <label className='label'>Phone Number</label>
                        <input className='input' type="text" onChange={this.changephonenumber} value={this.state.phonenumber}/>
                    </div>
                    <div className="gender">
                        <label className='label'>Gender:</label>
                        <input type="radio" value="Male" name="gender" className="radi" /> Male
                        <input type="radio" value="Female" name="gender" className="radi"/> Female            
                        <input type="radio" value="Other" name="gender" className="radi" /> Other
                    </div>
                    <div className='name'>
                        <label className='label'>Address</label>
                        <input className='input' type="textarea" onChange={this.changeaddress} value={this.state.address}/>
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
  }
}

export default Registernew;

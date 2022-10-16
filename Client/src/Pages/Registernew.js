import React, {Component} from 'react';
import axios from 'axios';


class Registernew extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
            age:'',
            birthdate:'',
            phonenumber:'',
            gender:'',
            address:''
        };
        this.changeusername=this.changeusername.bind(this);
        this.changeemail=this.changeemail.bind(this);
        this.changepassword=this.changepassword.bind(this);
        this.changeconfirmpassword=this.changeconfirmpassword.bind(this);
        this.changeage=this.changeage.bind(this);
        this.changebirthdate=this.changebirthdate.bind(this);
        this.changephonenumber=this.changephonenumber.bind(this);
        this.changegender=this.changegender.bind(this);
        this.changeaddress=this.changeaddress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

 
    changeusername(event){
        this.setState({
            username:event.target.value
        });
    }
    changeemail(event){
        this.setState({
            email:event.target.value
        });
    }
    changepassword(event){
        this.setState({
            password:event.target.value
        });
    }
    changeconfirmpassword(event){
        this.setState({
            confirmpassword:event.target.value
        });
    }
    changeage(event){
        this.setState({
            age:event.target.value
        });
    }
    changebirthdate(event){
        this.setState({
            birthdate:event.target.value
        });
    }
    changephonenumber(event){
        this.setState({
            phonenumber:event.target.value
        });
    }
    changegender(event){
        this.setState({
            gender:event.target.value
        });
    }
    changeaddress(event){
        this.setState({
            address:event.target.value
        });
    }

    onSubmit(event){
        event.preventDefault()

        const registered ={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
            confirmpassword:this.state.confirmpassword,
            age:this.state.age,
            birthdate:this.state.birthdate,
            phonenumber:this.state.phonenumber,
            gender:this.state.gender,
            address:this.state.address

        }
        axios.post('http://localhost:3000/api/users/signup',registered)
            .then(response=>console.log(response.data))
        this.setState({
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
            age:'',
            birthdate:'',
            phonenumber:'',
            gender:'',
            address:''
        })
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
                        <input className='input' type="text" onChange={this.changeusername} value={this.state.username}/>
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
                        <input className='input' type="password" onChange={this.changeconfirmpassword} value={this.state.confirmpassword}/>
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

                    
                    <div >
                        <button className='submit'  value='Submit' >Sign Up</button>
                    </div>
                </form>
            </div>
    
        </div>
  );
}
}

export default Registernew;
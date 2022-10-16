import React, {Component} from 'react';
import axios from 'axios';


class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        };

        this.changeemail=this.changeemail.bind(this);
        this.changepassword=this.changepassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
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

    onSubmit(event){
        event.preventDefault()

        const registered ={
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:3000/api/users/login',registered)
            .then(response=>console.log(response.data))
        this.setState({
            email:'',
            password:''
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
                <form className='form-wrapper' onSubmit={this.onSubmit}>

                    <div className='email'>
                        <label className='label'>Email</label>
                        <input className='input' type="email"  onChange={this.changeemail} value={this.state.email}/>
                    </div>
                    <div className='password'>
                        <label className='label'>password</label>
                        <input className='input' type="password" onChange={this.changepassword} value={this.state.password}/>
                    </div>
                    <div >
                        <button className='submit'  value='Submit' >Sign In</button>
                    </div>
                </form>
            </div>
    
        </div>
        );
    }
}

export default Login;
import React from 'react';
// import axios from 'axios';
// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             fullname:'',
//             username:'',
//             email:'',
//             password:''
//         };
//         this.changefullname = this.changefullname.bind(this);
//         this.changeusername=this.changeusername.bind(this);
//         this.changeemail=this.changeemail.bind(this);
//         this.changepassword=this.changepassword.bind(this);
//         this.onSubmit=this.onSubmit.bind(this);
//     }

//     changefullname(event){
//         this.setState({
//             fullname:event.target.value
//         });

//     }
//     changeusername(event){
//         this.setState({
//             username:event.target.value
//         });
//     }
//     changeemail(event){
//         this.setState({
//             email:event.target.value
//         });
//     }
//     changepassword(event){
//         this.setState({
//             password:event.target.value
//         });
//     }

//     onSubmit(event){
//         event.preventDefault()

//         const registered ={
//             fullname:this.state.fullname,
//             username:this.state.username,
//             email:this.state.email,
//             password:this.state.password
//         }
//         axios.post('http://localhost:3000/api/v1/users/signup',registered)
//             .then(response=>console.log(response.data))
//         this.setState({
//             fullname:'',
//             username:'',
//             email:'',
//             password:''
//         })
//     }

export const Registernew = () => {
  return (
    <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>
                        Create Account
                    </h2>
                </div>
                <form className='form-wrapper' >
                    <div className='name'>
                        <label className='label'>User name</label>
                        <input className='input' type="text" />
                    </div>
                    <div className='email'>
                        <label className='label'>Email</label>
                        <input className='input' type="email" />
                    </div>
                    <div className='password'>
                        <label className='label'>password</label>
                        <input className='input' type="password" />
                    </div>
                    <div className='password'>
                        <label className='label'>Confirm password</label>
                        <input className='input' type="password" />
                    </div>
                    <div className='num'>
                        <label className='label'>Age</label>
                        <input className='input' type="number" />
                    </div>
                    <div className='num'>
                        <label className='label'>Birth date</label>
                        <input
                            type="text"
                            className='input'
                            onChange={(e) => console.log(e.target.value)}
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                    <div className='name'>
                        <label className='label'>Phone Number</label>
                        <input className='input' type="text"/>
                    </div>
                    <div className="gender">
                        <label className='label'>Gender:</label>
                        <input type="radio" value="Male" name="gender" className="radi" /> Male
                        <input type="radio" value="Female" name="gender" className="radi"/> Female            
                        <input type="radio" value="Other" name="gender" className="radi" /> Other
                    </div>
                    <div className='name'>
                        <label className='label'>Address</label>
                        <input className='input' type="textarea"/>
                    </div>

                    
                    <div >
                        <button className='submit'  value='Submit' >Sign Up</button>
                    </div>
                </form>
            </div>
    
        </div>
  );
};

import React from "react";

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
                        <input className='input' type="date" />
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

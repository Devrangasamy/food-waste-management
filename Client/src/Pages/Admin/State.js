import React from "react";







export const Addstate =() =>{
  return(
    <form>
    <div className="container">
    <div className="app-wrapper" style={{height:"auto"}}>
    <div>
      <h2 className="title">Add State</h2>
    </div>
    <div className='name'>
      <label className='label'>Add State</label>
      <input className='input' type="text"/>
    </div>
    
    <div >
    <button className='submit'  value='Submit' >Submit</button>
    </div>
    </div>
    </div>
  </form>
  
  )
}


export const Managestate= () => {
  return (
    <div className='sidebar'>
      <h1>state/Manage</h1>
    </div>
  );
};
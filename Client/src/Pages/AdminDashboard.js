import React from 'react';
import img from './img.png';
import img2 from './img2.png';
import './AdminDashboard.css';
export const  AdminDashboard = () => {
  return (
    <div className='hiii'>
      
    <div className='hii' style={{backgroundColor: "blue",position:'relative'}}>
      <div className='imga'>
      <img src={img} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
      <div className='hibro'>
      <h2>Total Listed Food</h2>
      <h1>0</h1>
      </div>
    </div>
    <div className='hii' style={{backgroundColor: "green" ,position:'relative'}}>
    <div className='imga'>
      <img src={img2} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
    <div>
      <h2>Request Completed</h2>
      <h1>0</h1>
      </div>
    </div>
    <div className='hii' style={{backgroundColor: "red" ,position:'relative'}}>
    <div className='imga'>
      <img src={img2} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
    <div >
      <h2>Rejected Requests</h2>
      <h1>0</h1>
      </div>
    </div>
    <div className='hii' style={{backgroundColor: "black", position:'relative'}}>
    <div className='imga'>
      <img src={img2} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
    <div >
      <h2>All Requests</h2>
      <h1>0</h1>
      </div>
    </div>
    <div className='hii' style={{backgroundColor: "grey" ,position:'relative'}}>
    <div className='imga'>
      <img src={img2} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
    <div >
      <h2>New Requests</h2>
      <h1>0</h1>
      </div>
    </div>
    </div>  
  );
};

import React from 'react';
import img from './img.png';
import img2 from './img2.png';
import './Dashboard.css';
export const Dashboard = () => {
  return (
    <div className='hiii'>
    <div className='hii' style={{backgroundColor: "#FF1053",position:'relative',borderRadius:'10px',color:'black'}}>
      <div className='imga'>
      <img src={img} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
      <div className='hibro'>
      <h2>Total Listed Food</h2>
      <h1 style={{color:'black'}}>0</h1>
      </div>
    </div>
    <div className='hii' style={{backgroundColor: "#6C6EA0" ,position:'relative',borderRadius:'10px',color:'black'}}>
    <div className='imga'>
      <img src={img2} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
    <div>
      <h2>Request Completed</h2>
      <h1 style={{color:'black'}}>0</h1>
      </div>
    </div>
    <div className='hii' style={{backgroundColor: "#66C7F4" ,position:'relative',borderRadius:'10px',color:'black'}}>
    <div className='imga'>
      <img src={img2} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
    <div >
      <h2>Rejected Requests</h2>
      <h1 style={{color:'black'}}>0</h1>
      </div>
    </div>
    <div className='hii' style={{backgroundColor: "#C1CAD6", position:'relative',borderRadius:'10px',color:'black'}}>
    <div className='imga'>
      <img src={img2} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
    <div >
      <h2>All Requests</h2>
      <h1 style={{color:'black'}}>0</h1>
      </div>
    </div>
    <div className='hii' style={{backgroundColor: "#FFFFFF" ,position:'relative',borderRadius:'10px',color:'black'}}>
    <div className='imga'>
      <img src={img2} style={{height: "70px",width:"70px" ,alignItems:"center"}} />
      </div>
    <div >
      <h2>New Requests</h2>
      <h1 style={{color:'black'}}>0</h1>
      </div>
    </div>
    </div>  
  );
};

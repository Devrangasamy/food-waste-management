import React from "react";
import './add.css';
import TodoList from '../components/TodoList';




export const Addfood =() =>{
  return(
    <div className='todo-app'>
      <TodoList />
    </div>
  
  )
}


export const Manage= () => {
  return (
    <div className='sidebar'>
      <h1>Listfooddetails/Manage</h1>
    </div>
  );
};
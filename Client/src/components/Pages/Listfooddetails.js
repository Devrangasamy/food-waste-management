import React from "react";

 





// const ToDoList=()=>{
//   const addTask=text=>upadateTask([...tasks,{text}]);
//   const [tasks,upadateTask]=useState([
//     {text:"C",
//     isCompleted:false},
//     {
//       text:"python",
//       isCompleted:false
//     },
//     {
//       text:"java",
//       isCompleted:false
//     }
//   ]);
//   const toggleTask=index=>{
//     const newTask=[...tasks];
//     if(newTask[index].isCompleted){
//       newTask[index].isCompleted=false;
//     }
//     else{
//       newTask[index].isCompleted=true;
//     }
//     upadateTask(newTask);
//   }
//   const removeTask=index=>{
//     const newTask=[...tasks];
//     newTask.splice(index,1);
//     upadateTask(newTask);
//   }
//   return(
//     <div className="list-of-tasks-todo">
//       {tasks.map((task,index)=>(
//         <div className="task-status">
//           <span onClick={()=>toggleTask(index)} className={task.isCompleted? "task-name completed-task":"task-name"}>
          
//           {task.text}
//           </span>
//           <button onClick={()=>removeTask(index)}><i class="material-icons">delete</i></button>
//         </div>
//       ))}
//       <AddTask addTask={addTask}/>
//     </div>
//   );
// }

export const Listfooddetails= () => {
  return (
    <div className='sidebar'>
      <h1>Listfooddetails</h1>
    </div>
  );
};

export const Add= () => {

  return (
    <div className='sidebar'>
        <h1>add</h1>
    </div>
  );
};


export const Manage= () => {
  return (
    <div className='sidebar'>
      <h1>Listfooddetails/Manage</h1>
    </div>
  );
};
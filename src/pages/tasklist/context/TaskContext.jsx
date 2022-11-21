import React, { useState, createContext } from "react";


export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTask] = useState([]);
  const [search, setSearch] = useState("");
  
  const addTask = ({ title, description }) => {
    setTask([...tasks, {id:tasks.length, title, description }]);
  };

  const deleteTask = id =>{
    setTask(tasks.filter(task=>task.id !== id));
  }

  const updateTask = (data) =>{
    const temp = [...tasks];
    const taskToUpd = tasks.find(task=>task.id===data.id);
    taskToUpd.title=data.title;
    taskToUpd.description=data.description;
    setTask(temp); 
  }

  const addSearch = (value) => {
    setSearch(value);
  }

  return (
    <TaskContext.Provider value={{ tasks, search, addTask, deleteTask, addSearch, updateTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

import React from "react";
import Main from "./Main";
import Layout from "./Layout";
import TaskListApp from "../pages/tasklist/components/TaskListApp";
import RecetarioApp from "../pages/recetas/components/RecetarioApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Main/>} />
            <Route path="tasklist" element={<TaskListApp />} />
            <Route path="recetario/*" element={<RecetarioApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

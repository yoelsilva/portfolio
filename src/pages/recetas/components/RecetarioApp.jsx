import React from "react";
import { Routes, Route } from "react-router-dom";
//import MainContextProvider from "../context/MainContext";
import Layout from "./Layout";
import Recetas from "./Recetas";
import NewReceta from "./NewRecetas";

const RecetarioApp = () => {
  return (
    <>
     <Layout />
      <Routes>
          <Route index element={<Recetas />} />
          <Route path="crearReceta" element={<NewReceta />} />
      </Routes>
    </>
  );
};

export default RecetarioApp;

import { createContext, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);

  const createReceta = (data) => {
    const id = crypto.randomUUID();
    setRecetas([...recetas, data]);
  };

  const getReceta = (id) => {
    return recetas.find((receta) => receta.id === id);
  };

  const updateReceta = (data) => {
    const current = recetas;
    const index = current.findIndex((receta) => receta.id === data.id);
    current[index] = data;
    setRecetas(current);
  };

  const deleteReceta = (id) => {
    const before = recetas;
    const after = before.filter((item) => item.id !== id);
    setRecetas(after);
  };

  return (
    <MainContext.Provider
      value={{ recetas, createReceta, getReceta, updateReceta, deleteReceta }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

import React, { useContext } from "react";
import {
  Nav,
  Logo,
  ItemNav,
  SearchTask,
} from "../styles/NavbarStyle";
import { TaskContext } from "../context/TaskContext";

const Navbar = () => {
  const { addSearch } = useContext(TaskContext);

  const handleSearch = (e) => {
    addSearch(e.target.value);
  };

  return (
    <Nav>
      <Logo>
        <h2 className="full">Task List</h2>
        <h2 className="reduce">TL</h2>
      </Logo>
      <ItemNav>
        <SearchTask
          type="text"
          placeholder="Search Task"
          onChange={handleSearch}
        />
      </ItemNav>
    </Nav>
  );
};

export default Navbar;

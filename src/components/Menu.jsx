import { ButtonSwitch, MenuStyled, BarContainer } from "../style/Menubar";
import { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClickEvent);

    function handleClickEvent(e) {
     if (e.target.offsetParent !== menuRef.current) {
        setMenuOpen(false);
      }
      console.log()
    }
  }, []);

  const handleClick = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <>
      <BarContainer ref={menuRef}>
        <ButtonSwitch onClick={handleClick}>{menuOpen?"-":"+"}</ButtonSwitch>
        {menuOpen ? (
          <MenuStyled>
            <Link to="/">Main</Link>
            <Link to="recetario">Recetario</Link>
            <Link to="tasklist">Tasklist</Link>
          </MenuStyled>
        ) : (
          ""
        )}
      </BarContainer>
      <Outlet />
    </>
  );
};

export default Menu;

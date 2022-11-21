import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    padding: 2px 20px;
    background-color: #AAA;
    height: 56px;
    color: white;
    box-shadow: 0 3px 10px #AAA;
    border-radius: 3px;
  `;
  
  export const Logo = styled.div`
    display: inline-block;
    flex-grow: 1;
    font-family: sans-serif;
    text-shadow: 1px 0 #FFF, 0px 1px #FFF, -1px 0px #FFF, 0px -1px #FFF;
    color: #AAA;
    height: inherit;
    line-height: 0.5;  
    
    h2.reduce{display: none;}

    
    @media screen and (max-width:600px){
        h2.full{display:none;}
        h2.reduce{display: inherit;}
    }
  `;
  
  export const ItemNav = styled("div")({
    flexGrow: 2,
  });
  
  export const SearchTask = styled.input`
    color: #fff;
    height: 25px;
    border: none;
    border-bottom: 1px solid white;
    background: #aaa;
    width: 50%;
    transition: width 0.8s;
    &:focus {
      outline: none;
      border-bottom: none;
      box-shadow: 0 3px 8px #ddd;
      background-color: #ddd;
      color: #000;
    }
    &::placeholder {
      color: #ddd;
      text-align: center;
    }
  `;
  
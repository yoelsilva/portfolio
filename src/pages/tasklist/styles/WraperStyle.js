import styled from "styled-components";

export const Container = styled.div`
  margin-top: 65px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 30%;  
  display: flex;
  justify-content: center;
  align-items: center;  
  border-radius: 10px;
  text-align: center;
  font-family: sans-serif;
  box-shadow: 0px 3px 5px #999, 3px 0 5px #999;  
  form{
    width: 90%;
  }
  input,
  textarea {
    display: block;
    margin-top: 1em;
    width: 100%;
    border: none;
    font-family: sans-serif;
    resize: none;
    box-shadow: 0 1px 2px #999, 0 -1px 2px #999, -1px 0 2px #999, 1px 0 2px #999;
    border: none;
    outline: none;

      &:focus {
      outline: none;
      box-shadow: 0px 3px 5px #999, 0px -3px 5px #999;      
    }

    &::placeholder{
      text-align: center;
      text-transform: capitalize;
      text-shadow: 1px 1px 3px #999;
    }
  }
  button {
    display: block;
    width: 15em;
    margin: 1em;
    border: none;
    font-family: sans-serif;
    resize: none;
    box-shadow: 2px 0px 2px #999, 0px 2px 2px #999, -2px 0 2px #999,
      0px -2px 3px #999;
    border-radius: 4px;
    width: inherit;
    &:active {
      outline: none;
      box-shadow: none;
    }
  }

  @media screen and (max-width:500px){
    width: 90%;
    input,textarea, button{
      height: 30px;
    }

  }
`;
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  text-align: center;
  font-family: sans-serif;
  box-shadow: 0px 3px 5px #999, 3px 0 5px #999;
  h3,
  h5 {
    display: block;
    font-family: sans-serif;
  }
  button {
    border: none;
    margin: 0 5px;
    font-family: sans-serif;
    resize: none;
    box-shadow: 2px 0px 2px #999, 0px 2px 2px #999, -2px 0 2px #999,
      0px -2px 3px #999;
    border-radius: 4px;
    width: inherit;
    margin-bottom: 10px;
    &:active {
      outline: none;
      box-shadow: none;
    }
  }
`;

export const FormCard = styled.div`
  border-radius: 10px;
  text-align: center;
  font-family: sans-serif;
  box-shadow: 0px 3px 5px #999, 3px 0 5px #999;
  input,
  textarea {
    display: block;
    font-family: sans-serif;
    margin: 10px auto;
    width: 80%;
    resize: none;
  }
  button {
    border: none;
    margin: 0 5px;
    font-family: sans-serif;
    resize: none;
    box-shadow: 2px 0px 2px #999, 0px 2px 2px #999, -2px 0 2px #999,
      0px -2px 3px #999;
    border-radius: 4px;
    width: inherit;
    margin-bottom: 10px;
    &:active {
      outline: none;
      box-shadow: none;
    }
  }
`;
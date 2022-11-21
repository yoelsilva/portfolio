import styled from "styled-components";

export const BarContainer = styled.div`
    position: fixed;
    top: 100px;
    width: fit-content;
    opacity: .8;
`

export const ButtonSwitch = styled.button`
  background-color: #878282;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  box-shadow: 3px 3px 10px #a9a7a7;
  font-size: larger;
  font-family: sans-serif;
  &:active {
    box-shadow: none;
  }
`;

export const MenuStyled = styled.div`
  display: flex;
  width: max-content;
  background-color: gray;
  position: relative;
  left: 40px;
  border-radius: 0 20px 20px 20px;
  box-shadow: 3px 3px 5px #8f8e8e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  & a{
    color: #FFF;
    font-family: sans-serif;
    text-decoration: none;
  }

`;



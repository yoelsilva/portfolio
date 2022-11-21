import styled from "styled-components";

export const Tasks = styled.div`
  font-family: sans-serif;
  margin: 1em;
  padding: 10px;
  box-shadow: 2px 2px 10px #999;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 40px;
  text-align: center;
  @media screen and (max-width:860px) {
    grid-template-columns: repeat(3, auto);
    gap: 20px;
  }
  @media screen and (max-width:500px) {
    grid-template-columns: repeat(1, auto);
    gap: 20px;
  }
`;
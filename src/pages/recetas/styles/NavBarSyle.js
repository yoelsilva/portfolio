import styled from 'styled-components';

export const Tooltip = styled.div`
    display: flex;
    height: 56px;
    width: 100%;
    background-color: #060690;
    opacity: .7;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 0 5px 10px #060690;
    position: sticky;
    top: 8px;
    border-radius: 5px; 
    font-family: Impact,'Arial Narrow Bold', sans-serif ;
`

export const Logo = styled.div`
    color: #060690;
    font-size: 30px;
    text-shadow: 1px 0 5px #FFF, -1px 0 5px #FFF, 0 1px #FFF, 0 -1px #FFF;
    text-transform: uppercase;
    flex-grow: 1;
`

export const ContainerLinks = styled.div`
    display: flex;
    flex-grow: 100;
    justify-content: center;
    gap: 40px;
    & a {
        text-decoration: none;
        color: white;
        font-family: sans-serif;
        font-size: large;
    }
`
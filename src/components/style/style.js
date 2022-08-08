import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }
    body {
        background-color: orangered;
    }
`

export const Titulo = styled.h1`
    font-size: 2vw;
`
export const Div = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`
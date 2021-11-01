import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    button{
        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            transition: 0.5s;
        }
    }
    :root{

    }
`;
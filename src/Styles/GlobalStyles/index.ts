import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
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
        --color-primary: #27AE60;
        --color-secondary: #EB5757;

        --gray-dark: #333333;
        --gray-medium: #828282;
        --gray-light: #E0E0E0;
        --gray-x-light: #F5F5F5;

        --feedback-success: #168821;
        --feedback-error: #E60000;
        --feedback-warning: #FFCD07;
        --feedback-info: #155BCB;
    }
`;
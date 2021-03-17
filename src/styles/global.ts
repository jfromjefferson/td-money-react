import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-color: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
        --green: #33cc95;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Saira', sans-serif;
    }

    html{
        @media(max-width: 1800px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--background-color);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .modal-overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content{
        width: 100%;
        max-width: 576px;
        background-color: var(--background-color);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    #close-modal{
        cursor: pointer;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.7);
        }
    }
`
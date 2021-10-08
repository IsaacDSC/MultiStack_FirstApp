import { styled } from '@mui/material'


export const FooterStyles = styled('footer')`
    margin-top: 500px;
    border: solid 1px white;
    .card-body {
    background: rgba(0, 0, 0, 0.877);
    color: white;
    height: 200px;
    }
    h2{
        font-size: 38px;
        margin-top: 15%;
        font-weight: 900;
        color: red;
    }
    h2:hover{
        transition: 500ms;
        font-size: 54px;
    }
    ul li{
        display: block;
    }
    a{
        font-size: 20px;
        text-decoration: none;
        color: white;
    }
    a:hover{
        color: #7070faaf;
    }
    button{
        width: 100%;
        border-radius: 0;
    }
    button:hover{
        background-color: red;
    }
`

import styled from 'styled-components';

export const TextoInicial = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    h3{
        font-size: 1.6rem;
        font-family: "roboto", sans-serif;
        margin-top: 10px;
    }
    hr{
        margin-top: 30px;
        opacity: 80%;
    }
`;

export const QuemSomos = styled.div`
    margin-left: 3rem;
    width: 60%;
    height: 100%;
    background-color: #FFF;
    display: flex;
    font-family: "roboto", sans-serif;
    flex-direction: row;
    margin-top: 2rem;
    img{
        margin-left: -80px;
        width: 270px;
        height: 250px;
        margin-top: 2rem;
    }
    p{
        margin-top: 3.8rem;
        font-size: 1.2rem;
    }
    div{
        float: right;
        width: 0%;
        height: 100%;
        background-color: black;
    }

    @media (max-width: 845px) {
    margin-left: 7rem;
    width: 60%;
    height: 100%;
    background-color: #FFF;
    display: flex;
    font-family: "roboto", sans-serif;
    flex-direction: row;
    margin-top: 2rem;
    img{
        width: 0;
        height: 0;
        visibility: hidden;
    }
    p{
        margin-top: 3.8rem;
        font-size: 1rem;
    }
    div{
        float: right;
        width: 0%;
        height: 100%;
        background-color: black;
    }
    }
    @media (max-width: 755px) {
    margin-left: 7rem;
    width: 60%;
    height: 100%;
    background-color: #FFF;
    display: flex;
    font-family: "roboto", sans-serif;
    flex-direction: row;
    margin-top: 2rem;
    img{
        width: 0;
        height: 0;
        visibility: hidden;
    }
    p{
        margin-top: 3.8rem;
        font-size: 1rem;
    }
    div{
        float: right;
        width: 0%;
        height: 100%;
        background-color: black;
    }
    }
`;

export const Contato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
    float: right;
    width: 25%;
    height: 189px;
    margin-left: 4rem;
    border-left: 0.1rem solid black;
    .trabalhe_conosco{
        font-size: 1.3rem;
        float: right;
    }
    .icon_insta{
        font-size: 2rem;
        margin-top: 1rem;
    }
    .icon_facebook{
        font-size: 2rem;
        margin-top: 1rem;
    }
    .icon_wpp{
        font-size: 3rem;
        color: green;
        float: right;
        margin-top: 1rem;
    }
    h3{
        font-size: 11.3rem;
    }
    p{
        margin-top: 1rem;
        margin-left: 1rem;
        font-family: "roboto", sans-serif;
    }


    @media (max-width: 845px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
    float: right;
    width: 25%;
    height: 189px;
    margin-left: 4rem;
    border-left: 0.1rem solid black;
    .trabalhe_conosco{
        font-size: 1rem;
        float: right;
    }
    .icon_insta{
        font-size: 2rem;
        margin-top: 1rem;
    }
    .icon_facebook{
        font-size: 2rem;
        margin-top: 1rem;
    }
    .icon_wpp{
        font-size: 3rem;
        color: green;
        float: right;
        margin-top: 1rem;
    }
    h3{
        font-size: 11.3rem;
    }
    p{
        margin-top: 1rem;
        margin-left: 1rem;
        font-family: "roboto", sans-serif;
    }
    }

    @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
    float: right;
    width: 25%;
    height: 189px;
    margin-left: 4rem;
    border-left: 0.1rem solid black;
    .trabalhe_conosco{
        font-size: 0.7rem;
        float: right;
    }
    .icon_insta{
        font-size: 1rem;
        margin-top: 1rem;
    }
    .icon_facebook{
        font-size: 1rem;
        margin-top: 1rem;
    }
    .icon_wpp{
        font-size: 2rem;
        color: green;
        float: right;
        margin-top: 1rem;
    }
    h3{
        font-size: 11.3rem;
    }
    p{
        margin-top: 1rem;
        margin-left: 1rem;
        font-family: "roboto", sans-serif;
    }
    }
`;

export const Rodape = styled.div`
    background-color: black;
    width: 100%;
    height: 258px;
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin-left: 2rem;
        color: #FFF;
        font-family: "roboto", sans-serif;
    }
    .local{
        margin-right: 2rem;
        color: #FFF;
        font-family: "roboto", sans-serif;
    }


    @media (max-width: 775px){
    background-color: black;
    width: 100%;
    height: 258px;
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin-left: 2rem;
        color: #FFF;
        font-family: "roboto", sans-serif;
        font-size: 0.7rem;
    }
    .local{
        margin-right: 2rem;
        color: #FFF;
        font-family: "roboto", sans-serif;
    }
    }
`;
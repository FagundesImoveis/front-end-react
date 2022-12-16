import styled from 'styled-components';
import imagemDeFundo from '../../../assets/img/backgrounds/fundo2.jpeg'

export const MenuStyled = styled.header`
    float: left;
    width: 100%;
    height: 700px;
    background-color: black;
    margin: 0;
    background-image: url(${imagemDeFundo});
    background-size: cover;
    nav{
        float: left;
        width: 100%;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 80px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        p{
            margin-top: 35px;
            text-align: center;
            font-size: 1.4rem;
        }
        a{
            text-decoration: none;
            color: gray;
        }

        .whats{
            font-size: 1rem;
            color: green;
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 720px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -25px;
            width:300px;
            margin-left: 20px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
        .MenuSubOn{
            opacity: 1;
            float: right;
            width: 100%;
            height: 200px;
            position: absolute;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
            animation: AnimationMenu 1s;
            a{
                text-decoration: none;
                color: black;
            }
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 568px;
            width: 500px;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        }

        form{
            height: 350px;
            width: 100%;
        }

    .painel{
        width: 100%;
        height: 70%;
        margin-top: -100px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            opacity: 0;
        }
        div{
            width: 270px;
            height: 170px;
            box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
            border-radius: 10px;
            margin-top: 17px;
            display: flex;
            flex-direction: column;
            h2{
                margin-top: 7px;
                text-align: center;
                font-family: 'Mukta', sans-serif;
            }
            .tipo{
                text-align: center;
                margin-top: 7px;
                font-family: 'Mukta', sans-serif;
            }
            .quartos{
                text-align: center;
                font-size: 0.70rem;
                margin-top: 10px;
                font-family: 'Mukta', sans-serif;
            }
            .aluguel{
                text-align: center;
                font-size: 0.70rem;
                margin-top: -65px;
                color: red;
                font-family: 'Mukta', sans-serif;
            }
        }
        a{
            color: black;
            text-decoration: none;
        }
    }
    
    .text{
            opacity: 0;
            width: 10px;
            height: 10px;
        }
    
    .painelNot{
        width: 100%;
        height: 70%;
        margin-top: -100px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Mukta', sans-serif;        
        color: rgba(92, 76, 76, 0.329);
        .text{
            opacity: 1;
            width: 100%;
            height: 100%;
            text-align: center;
            margin-top: 480px;
        }
    }
    .painelN{
        width: 0%;
    }
    .wpp{
        float: right;
        top: 580px;
        position: fixed;
        font-size: 3rem;
        color: green;
        border-radius: 10px;
        width: 50px;
    }
    .buttonwpp{
        width: 0px;
        background: none;
        border: none;
    }
    @keyframes AnimationMenu {
            from{
                opacity: 0;
                height: 0;
            }
            to{
                opacity: 1;
                height: 100;
            }
        }


       
        @media (min-width: 1280px) {
            nav{
        float: left;
        width: 100%;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 80px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 780px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -20px;
            margin-left: 30px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
        }

        @media (max-width: 1082px) {
            float: left;
    width: 100%;
    height: 700px;
    background-color: black;
    margin: 0;
    background-image: url(${imagemDeFundo});
    background-size: cover;
    nav{
        float: left;
        width: 100%;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 80px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 700px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -5px;
            margin-left: 100px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
        .MenuSubOn{
            opacity: 1;
            float: right;
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
            animation: AnimationMenu 1s;
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 558px;
            width: 500px;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        }
        }


        @media (max-width: 1064px) {
            nav{
        float: left;
        width: 600px;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 80px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 640px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -20px;
            margin-left: 20px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
        }

        @media (max-width: 1062px) {
            nav{
        float: left;
        width: 100%;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 100px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 680px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -5px;
            margin-left: 100px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
    .MenuSubOn{
            opacity: 1;
            float: right;
            width: 100%;
            height: 200px;
            position: absolute;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
            animation: AnimationMenu 1s;
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 518px;
            width: 500px;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        }
        }


        @media (max-width: 1050px) {
            nav{
        float: left;
        width: 600px;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 80px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 6140px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -20px;
            margin-left: 20px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
        }

        @media (max-width: 1032px) {
            nav{
        float: left;
        width: 100%;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 100px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 610px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -5px;
            margin-left: 100px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
    .MenuSubOn{
            opacity: 1;
            float: right;
            margin-left: 0;
            width: 100%;
            height: 200px;
            position: absolute;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
            animation: AnimationMenu 1s;
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 0;
            width: 100%;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        }
        }
      

        @media (max-width: 1015px) {
            nav{
        float: left;
        width: 100%;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 100px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 570px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -20px;
            margin-left: 30px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
    .MenuSubOn{
            opacity: 1;
            float: right;
            width: 100%;
            height: 200px;
            position: absolute;
            background-color: black;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
            animation: AnimationMenu 1s;
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 518px;
            width: 500px;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        }
        }
        
        @media (max-width: 951px) {
            nav{
                float: left;
                width: 100%;
                height: 110px;
                background-color: #fff;
                ul{
                    float: right;
                    display: flex;
                    margin-right: 100px;
                    margin-top: 45px;
                    li{
                        display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 450px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -20px;
            margin-left: 30px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
    .MenuSubOn{
            opacity: 1;
            float: right;
            margin-left: 0px;
            width: 100%;
            height: 200px;
            position: absolute;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
            animation: AnimationMenu 1s;
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 0px;
            width: 100%;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        }

        .painel{
        width: 100%;
        height: 70%;
        margin-top: -100px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            opacity: 0;
        }
        div{
            width: 270px;
            height: 170px;
            box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
            border-radius: 10px;
            margin-top: 17px;
            display: flex;
            flex-direction: column;
            h2{
                margin-top: 7px;
                text-align: center;
                font-family: 'Mukta', sans-serif;
            }
            .tipo{
                text-align: center;
                margin-top: 27px;
                font-family: 'Mukta', sans-serif;
            }
            .quartos{
                text-align: center;
                font-size: 0.70rem;
                margin-top: 15px;
                font-family: 'Mukta', sans-serif;
            }
            .aluguel{
                text-align: center;
                font-size: 0.70rem;
                margin-top: -65px;
                color: red;
                font-family: 'Mukta', sans-serif;
            }
        }
        a{
            color: black;
            text-decoration: none;
        }
    }
    
    .text{
            opacity: 0;
            width: 10px;
            height: 10px;
        }
    
    .painelNot{
        width: 100%;
        height: 70%;
        margin-top: -100px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Mukta', sans-serif;
        color: rgba(92, 76, 76, 0.329);
        .text{
            opacity: 1;
            width: 100%;
            height: 100%;
            text-align: center;
            margin-top: 480px;
        }
    }
    .painelN{
        width: 0%;
    }
    }

    @media (max-width: 892px) {
            nav{
                float: left;
                width: 100%;
                height: 110px;
                background-color: #fff;
                ul{
                    float: right;
                    display: flex;
                    margin-right: 100px;
                    margin-top: 45px;
                    li{
                        display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 400px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -20px;
            margin-left: 30px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
    .MenuSubOn{
            opacity: 1;
            float: right;
            margin-left: 0px;
            height: 200px;
            height: 100%;
            position: absolute;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
            animation: AnimationMenu 1s;
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 0px;
            width: 100%;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        }
    }

    @media (max-width: 850px) {
            nav{
                float: left;
                width: 100%;
                height: 110px;
                background-color: #fff;
                ul{
                    float: right;
                    display: flex;
                    margin-right: 100px;
                    margin-top: 45px;
                    li{
                        display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                }
            }
        }
        p{
            margin-right: 10rem;
        }
        .iconMenu{
            position: absolute;
            margin-top: 43px;
            float: right;
            margin-left: 370px;
            font-size: 1.3rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: -20px;
            margin-left: 30px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
    }
    .MenuSubOn{
            opacity: 1;
            float: right;
            margin-left: 0px;
            display: flex;
            width: 100%;
            height: 200px;
            position: absolute;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
            animation: AnimationMenu 1s;
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 0px;
            width: 100%;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
            box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        }
    }
    
    @media (max-width: 735px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 100px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.80rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 43px;
        float: right;
        margin-left: 410px;
        font-size: 1.3rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: -20px;
        margin-left: 20px;
        width: 230px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 188px;
        width: 500px;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
        box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
    }
    }
    
    @media (max-width: 709px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 100px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.80rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 43px;
        float: right;
        margin-left: 300px;
        font-size: 1.3rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: -5px;
        margin-left: 80px;
        width: 200px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
        box-shadow: 0.50rem 0.50rem 0.50rem  rgba(0, 0, 0, 0.178);
    }
    }

    @media (max-width: 677px) {
    float: left;
    width: 100%;
    height: 800px;
    background-color: black;
    margin: 0;
    background-image: url(${imagemDeFundo});
    background-size: cover;
    }   
    
    @media (max-width: 670px) {
        nav{
            float: left;
            width: 100%;
            height: 110px;
            background-color: #fff;
            ul{
                float: right;
                display: flex;
        margin-right: 110px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.80rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 43px;
        float: right;
        margin-left: 350px;
        font-size: 1.3rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: -5px;
        margin-left: 60px;
        width: 170px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 118px;
        width: 500px;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }

    @media (max-width: 665px) {
        nav{
            float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 120px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.65rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 43px;
        float: right;
        margin-left: 300px;
        font-size: 1.3rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: -5px;
        margin-left: 60px;
        width: 170px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 118px;
        width: 500px;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }

    @media (max-width: 633px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 120px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.65rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 330px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: -5px;
        margin-left: 60px;
        width: 160px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 58px;
        width: 500px;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }


    @media (max-width: 623px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.65rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 360px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: -5px;
        margin-left: 30px;
        width: 150px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 58px;
        width: 500px;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    
    }

    .wpp{
        float: right;
        top: 760px;
        position: fixed;
        font-size: 3rem;
        color: green;
        border-radius: 10px;
        width: 50px;
    }

    }

    @media (max-width: 593px){
            nav{
        float: left;
        width: 100%;
        height: 110px;
        background-color: #fff;
        ul{
            float: right;
            display: flex;
            margin-right: 140px;
            margin-top: 45px;
            li{
                display: inline;
                margin-left: 1.9rem;
                a{
                    text-decoration: none;
                    border-bottom: 0;
                    color: black;
                    font-family: 'League Spartan', sans-serif;
                    font-size: 0.65rem;
                }
            }
        }
        .iconMenu{
            position: absolute;
            margin-top: 45px;
            float: right;
            margin-left: 280px;
            font-size: 1.1rem;
            cursor: pointer;
        }
        img{
            float: left;
            margin-top: 5px;
            margin-left: 30px;
            width: 150px;
        }
        input{
            margin-top: 48px;
            margin-right: 110px;
            float: right;
            width: 370px;
            height: 20px;
        }
        }
        .MenuSubOn{
            opacity: 1;
            float: right;
            width: 100%;
            height: 200px;
            position: absolute;
            background-color: #fff;
            animation: AnimationMenu 1s;
        }
        .MenuOff{
            opacity: 0;
            float: right;
            margin-left: 58px;
            width: 500px;
            height: 0%;
            position: absolute;
            border-radius: 5px;
            margin-top: 43px;
            background-color: #fff;
        }
        }


    @media (max-width: 572px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.50rem;
            }
        }
    }
    p{
        font-size: 1rem;
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 260px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: 5px;
        margin-left: 10px;
        width: 190px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }



    @media (max-width: 540px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.50rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 260px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: 5px;
        margin-left: 30px;
        width: 140px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }



    @media (max-width: 524px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.50rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 210px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: 5px;
        margin-left: 10px;
        width: 170px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }

    @media (max-width: 470px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.50rem;
            }
        }
    }
    p{
        font-size: 0.90rem;
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 210px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: 5px;
        margin-left: 10px;
        width: 170px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }

    @media (max-width: 470px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.50rem;
            }
        }
    }
    p{
        font-size: 0.65rem;
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 210px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: 5px;
        margin-left: 10px;
        width: 170px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }

    @media (max-width: 420px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.50rem;
            }
        }
    }
    p{
        font-size: 0.65rem;
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 210px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        width: 140px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }

    @media (max-width: 417px) {
        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.50rem;
            }
        }
    }
    p{
        font-size: 0.70rem;
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 210px;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        width: 140px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }
    }

    @media (max-width: 412px) {

        nav{
    float: left;
    width: 100%;
    height: 110px;
    background-color: #fff;
    ul{
        float: right;
        display: flex;
        margin-right: 140px;
        margin-top: 45px;
        li{
            display: inline;
            margin-left: 1.9rem;
            a{
                text-decoration: none;
                border-bottom: 0;
                color: black;
                font-family: 'League Spartan', sans-serif;
                font-size: 0.50rem;
            }
        }
    }
    .iconMenu{
        position: absolute;
        margin-top: 45px;
        float: right;
        margin-left: 12rem;
        font-size: 1.1rem;
        cursor: pointer;
    }
    img{
        float: left;
        margin-top: 15px;
        margin-left: 0px;
        width: 140px;
    }
    input{
        margin-top: 48px;
        margin-right: 110px;
        float: right;
        width: 370px;
        height: 20px;
    }
    }
    .MenuSubOn{
        opacity: 1;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #fff;
        animation: AnimationMenu 1s;
    }
    .MenuOff{
        opacity: 0;
        float: right;
        margin-left: 0px;
        width: 100%;
        height: 0%;
        position: absolute;
        border-radius: 5px;
        margin-top: 43px;
        background-color: #fff;
    }

        .painel{
        width: 100%;
        height: 70%;
        margin-top: -10px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            opacity: 0;
        }
        div{
            width: 270px;
            height: 170px;
            box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
            border-radius: 10px;
            margin-top: 17px;
            display: flex;
            flex-direction: column;
            h2{
                margin-top: 7px;
                text-align: center;
                font-family: 'Mukta', sans-serif;
            }
            .tipo{
                text-align: center;
                margin-top: 27px;
                font-family: 'Mukta', sans-serif;
            }
            .quartos{
                text-align: center;
                font-size: 0.70rem;
                margin-top: 15px;
                font-family: 'Mukta', sans-serif;
            }
            .aluguel{
                text-align: center;
                font-size: 0.70rem;
                margin-top: -65px;
                color: red;
                font-family: 'Mukta', sans-serif;
            }
        }
        a{
            color: black;
            text-decoration: none;
        }
    }
    }
    

    @media (max-width: 400px) {

nav{
float: left;
width: 100%;
height: 110px;
background-color: #fff;
ul{
float: right;
display: flex;
margin-right: 140px;
margin-top: 45px;
li{
    display: inline;
    margin-left: 1.9rem;
    a{
        text-decoration: none;
        border-bottom: 0;
        color: black;
        font-family: 'League Spartan', sans-serif;
        font-size: 0.50rem;
    }
}
}
.iconMenu{
position: absolute;
margin-top: 38px;
float: right;
margin-left: 9.3rem;
font-size: 1.1rem;
cursor: pointer;
}
img{
float: left;
margin-top: 5px;
margin-left: 10px;
width: 140px;
}
input{
margin-top: 48px;
margin-right: 110px;
float: right;
width: 370px;
height: 20px;
}
}
.MenuSubOn{
opacity: 1;
float: right;
margin-left: 20px;
width: 100%;
height: 200px;
position: absolute;
background-color: #fff;
animation: AnimationMenu 1s;
}
.MenuOff{
opacity: 0;
float: right;
margin-left: 0px;
width: 100%;
height: 0%;
position: absolute;
border-radius: 5px;
margin-top: 43px;
background-color: #fff;
}

.painel{
width: 100%;
height: 70%;
margin-top: -10px;
background-color: #fff;
position: absolute;
border-radius: 15px;
box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h3{
    opacity: 0;
}
div{
    width: 270px;
    height: 170px;
    box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
    border-radius: 10px;
    margin-top: 17px;
    display: flex;
    flex-direction: column;
    h2{
        margin-top: 7px;
        text-align: center;
        font-family: 'Mukta', sans-serif;
    }
    .tipo{
        text-align: center;
        margin-top: 27px;
        font-family: 'Mukta', sans-serif;
    }
    .quartos{
        text-align: center;
        font-size: 0.70rem;
        margin-top: 15px;
        font-family: 'Mukta', sans-serif;
    }
    .aluguel{
        text-align: center;
        font-size: 0.70rem;
        margin-top: -65px;
        color: red;
        font-family: 'Mukta', sans-serif;
    }
}
a{
    color: black;
    text-decoration: none;
}
}

@media (max-width: 398px) {

nav{
float: left;
width: 100%;
height: 110px;
background-color: #fff;
ul{
float: right;
display: flex;
margin-right: 140px;
margin-top: 45px;
li{
    display: inline;
    margin-left: 1.9rem;
    a{
        text-decoration: none;
        border-bottom: 0;
        color: black;
        font-family: 'League Spartan', sans-serif;
        font-size: 0.10rem;
    }
}
}
.iconMenu{
position: absolute;
margin-top: 38px;
float: right;
margin-left: 11.3rem;
font-size: 1.1rem;
cursor: pointer;
}
img{
float: left;
margin-top: 20px;
margin-left: 15px;
width: 110px;
}
input{
margin-top: 48px;
margin-right: 110px;
float: right;
width: 370px;
height: 20px;
}
}
.MenuSubOn{
opacity: 1;
float: right;
margin-left: 20px;
width: 100%;
height: 200px;
position: absolute;
background-color: #fff;
animation: AnimationMenu 1s;
}
.MenuOff{
opacity: 0;
float: right;
margin-left: 0px;
width: 100%;
height: 0%;
position: absolute;
border-radius: 5px;
margin-top: 43px;
background-color: #fff;
}

.painel{
width: 100%;
height: 70%;
margin-top: -10px;
background-color: #fff;
position: absolute;
border-radius: 15px;
box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h3{
    opacity: 0;
}
div{
    width: 270px;
    height: 170px;
    box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
    border-radius: 10px;
    margin-top: 17px;
    display: flex;
    flex-direction: column;
    h2{
        margin-top: 7px;
        text-align: center;
        font-family: 'Mukta', sans-serif;
    }
    .tipo{
        text-align: center;
        margin-top: 27px;
        font-family: 'Mukta', sans-serif;
    }
    .quartos{
        text-align: center;
        font-size: 0.70rem;
        margin-top: 15px;
        font-family: 'Mukta', sans-serif;
    }
    .aluguel{
        text-align: center;
        font-size: 0.70rem;
        margin-top: -65px;
        color: red;
        font-family: 'Mukta', sans-serif;
    }
}
a{
    color: black;
    text-decoration: none;
}
}
}
}

`;

export const Content = styled.div`
    h3{
        margin-top: 40px;
        text-align: center;
        font-family: 'League Spartan', sans-serif;
        animation: TextMenu 2s;
    }
    .titleMenuOn{
        font-size: 0.90rem;
        margin-top: 40px;
        text-align: center;
        text-align: center;
        font-family: 'Mukta', sans-serif;
        animation: TextMenu 2s;
        cursor: pointer;
    }
    .titleMenu{
            font-size: 0rem;
            margin-top: 0px;
            text-align: center;
            text-align: center;
            font-family: 'Mukta', sans-serif;
            cursor: pointer;
    }

    @keyframes TextMenu {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const Linha = styled.span`
    width: 95%;
    margin: 0 auto;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.178);
    margin-top: 10px;
`;

export const Container = styled.div`
    float: left;
    display: flex;
    width: 30%;
    height: 360px;
    margin-top: 60px;
    animation: animationImg 2s;
    @keyframes animationImg {
        from{
            opacity: 0;
            margin-top: 150px;
        }
        to{
            margin-top: 60px;
        }
    }

    @media (max-width: 931px) {
    float: left;
    display: flex;
    width: 20%;
    height: 360px;
    margin-top: 60px;
    margin-left: -70px;
    animation: animationImg 2s;
    }


    @media (max-width: 831px) {
        float: left;
    display: flex;
    width: 100px;
    height: 360px;
    margin-top: 60px;
    margin-left: -80px;
    animation: animationImg 2s;
    }


    @media (max-width: 703px) {
        float: left;
    display: flex;
    width: 160px;
    height: 290px;
    margin-top: 60px;
    margin-left: -80px;
    }

    @media (max-width: 677px) {
    float: left;
    display: flex;
    width: 160px;
    height: 340px;
    margin-top: 60px;
    margin-left: 20px;
    }

    @media (max-width: 639px) {
    float: left;
    display: flex;
    width: 0px;
    height: 0px;
    margin-top: 60px;
    margin-left: 20px;
    }
`;

export const Pesquisa = styled.div`
    float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 490px;
    height: 500px;
    margin-top: 55px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p{
            float: left;
            margin-top: 16px;
            padding-right: 0.30rem;
            font-size: 1.20rem;
            font-family: sans-serif;
            text-align: center;
            font-weight: 600;
            color: #fff;
            &:hover{
                cursor: pointer;
            }
            &::after{
            height: 2px;
            width: 80%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #d0378c;
        }
        }
    }
    input{
        background-color: #474242;
        color: #fff;
    }
    .block1{
        float: left;
        width: 37%;
        height: 20%;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
        margin-top: 10px;

    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }

    @keyframes animationBarra {
        from{
            width: 0;
        }
        to{
            width: 37%;
        }
    }


    @media (max-width: 959px) {
        float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 490px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }

    }


    @media (max-width: 831px) {
        float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 490px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }
    }


    @media (max-width: 677px) {
        float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 490px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }
    }



    @media (max-width: 639px) {
        float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 490px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }
    }


    @media (max-width: 612px) {
        float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 490px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }

    .painel{
        width: 100%;
        height: 70%;
        margin-top: 10px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            opacity: 0;
        }
        div{
            width: 270px;
            height: 170px;
            box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
            border-radius: 10px;
            margin-top: 17px;
            display: flex;
            flex-direction: column;
            h2{
                margin-top: 7px;
                text-align: center;
                font-family: 'Mukta', sans-serif;
            }
            .tipo{
                text-align: center;
                margin-top: 27px;
                font-family: 'Mukta', sans-serif;
            }
            .quartos{
                text-align: center;
                font-size: 0.70rem;
                margin-top: 15px;
                font-family: 'Mukta', sans-serif;
            }
            .aluguel{
                text-align: center;
                font-size: 0.70rem;
                margin-top: -65px;
                color: red;
                font-family: 'Mukta', sans-serif;
            }
        }
        a{
            color: black;
            text-decoration: none;
        }
    }
    
    .text{
            opacity: 0;
            width: 10px;
            height: 10px;
        }
    
    .painelNot{
        margin-left: 110px;
        width: 80%;
        height: 90%;
        margin-top: 20px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Mukta', sans-serif;
        color: rgba(92, 76, 76, 0.329);
        .text{
            opacity: 1;
            width: 100%;
            height: 100%;
            text-align: center;
            margin-top: 480px;
        }
    }
    .painelN{
        width: 0%;
    }
    }


    @media (max-width: 579px) {
        float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 490px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }
    }




    @media (max-width: 551px) {
        float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }


    .painel{
        width: 100%;
        height: 70%;
        margin-top: 10px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            opacity: 0;
        }
        div{
            width: 270px;
            height: 170px;
            box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
            border-radius: 10px;
            margin-top: 17px;
            display: flex;
            flex-direction: column;
            h2{
                margin-top: 7px;
                text-align: center;
                font-family: 'Mukta', sans-serif;
            }
            .tipo{
                text-align: center;
                margin-top: 27px;
                font-family: 'Mukta', sans-serif;
            }
            .quartos{
                text-align: center;
                font-size: 0.70rem;
                margin-top: 15px;
                font-family: 'Mukta', sans-serif;
            }
            .aluguel{
                text-align: center;
                font-size: 0.70rem;
                margin-top: -65px;
                color: red;
                font-family: 'Mukta', sans-serif;
            }
        }
        a{
            color: black;
            text-decoration: none;
        }
    }
    
    }


    @media (max-width: 504px) {
        float: right;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }


    .painel{
        width: 100%;
        height: 70%;
        margin-top: 10px;
        background-color: #fff;
        position: absolute;
        border-radius: 15px;
        box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            opacity: 0;
        }
        div{
            width: 270px;
            height: 170px;
            box-shadow: 0.70rem 0.70rem 0.70rem  rgba(0, 0, 0, 0.198);
            border-radius: 10px;
            margin-top: 17px;
            display: flex;
            flex-direction: column;
            h2{
                margin-top: 7px;
                text-align: center;
                font-family: 'Mukta', sans-serif;
            }
            .tipo{
                text-align: center;
                margin-top: 27px;
                font-family: 'Mukta', sans-serif;
            }
            .quartos{
                text-align: center;
                font-size: 0.70rem;
                margin-top: 15px;
                font-family: 'Mukta', sans-serif;
            }
            .aluguel{
                text-align: center;
                font-size: 0.70rem;
                margin-top: -65px;
                color: red;
                font-family: 'Mukta', sans-serif;
            }
        }
        a{
            color: black;
            text-decoration: none;
        }
    }
    
    }

    @media (max-width: 500px) {
        float: right;
    margin-right: 3rem;
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }
    }

    
    
    @media (max-width: 471px) {
        float: right;
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
    width: 390px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
        width: 98%;
        margin: 0 auto;
        margin-top: 10px;
        opacity: 60%;
    }
    
}

@media (max-width: 445px) {
        float: right;
        margin-right: 1.78rem;
        display: flex;
        flex-direction: column;
    width: 390px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
        width: 98%;
        margin: 0 auto;
        margin-top: 10px;
        opacity: 60%;
    }
    
}


@media (max-width: 433px) {
    float: right;
margin-right: 1rem;
display: flex;
flex-direction: column;
width: 390px;
height: 500px;
margin-top: 25px;
background-color: #474242;
border-radius: 10px;
border: 20rem 20rem 20rem solid black;
div{
    width: 80%;
    margin: 0 auto;
    height: 40px;
    display: flex;
    h5{
        margin-top: 16px;
        padding-right: 1.3rem;
        font-size: 0.90rem;
        font-family: sans-serif;
        font-weight: 600;
    }
}
.block1{
    float: left;
    width: 13%;
    height: 1%;
    margin-left: 36px;
    background-color: #d0378c;
    opacity: 1;
    animation: animationBarra 2s;
}
.block2{
    float: left;
    width: 60px;
    height: 1%;
    margin-left: 16px;
    background-color: #d0378c;
    opacity: 0;
}
hr{
        width: 98%;
        margin: 0 auto;
        margin-top: 10px;
        opacity: 60%;
}
}


    @media (max-width: 420px) {
    float: right;
    margin-right: 1.7rem;
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 500px;
    margin-top: 25px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }

    }

    @media (max-width: 417px) {
    float: right;
    margin-right: 0.70rem;
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 500px;
    margin-top: 70px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }

    }

    @media (max-width: 412px) {
    float: right;
    margin-right: 1.7rem;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 500px;
    margin-top: 70px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }

    }
   
    @media (max-width: 406px) {
    float: right;
    margin-right: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 500px;
    margin-top: 70px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }

    }

    @media (max-width: 400px) {
    float: right;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 500px;
    margin-top: 70px;
    background-color: #474242;
    border-radius: 10px;
    border: 20rem 20rem 20rem solid black;
    div{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        display: flex;
        h5{
            margin-top: 16px;
            padding-right: 1.3rem;
            font-size: 0.90rem;
            font-family: sans-serif;
            font-weight: 600;
        }
    }
    .block1{
        float: left;
        width: 13%;
        height: 1%;
        margin-left: 36px;
        background-color: #d0378c;
        opacity: 1;
        animation: animationBarra 2s;
    }
    .block2{
        float: left;
        width: 60px;
        height: 1%;
        margin-left: 16px;
        background-color: #d0378c;
        opacity: 0;
    }
    hr{
            width: 98%;
            margin: 0 auto;
            margin-top: 10px;
            opacity: 60%;
    }

    }


`;

export const Cidade = styled.section`
    float: left;
    width: 100%;
    height: 20%;
    margin-top: 10px;
    input{
        width: 95%;
        height: 60%;
        border: none;
        margin-left: 5px;
        &:focus{
            outline: 0;
        }
        font-size: 0.90rem;
        color: #fff;
    }
    h3{
        margin-left: 37px;
        font-family: 'Mukta', sans-serif;
        font-weight: 400;
        margin-top: -26px;
        color: #fff;
    }
    .icon{
        margin-top: 10px;
        margin-left: 10px;
        display: flex;
        color: #fff;
        font-size: 1.5rem;
    }
`;

export const Tipo = styled.section`
    float: left;
    width: 100%;
    height: 20%;
    input{
        width: 95%;
        height: 60%;
        border: none;
        margin-left: 5px;
        &:focus{
            outline: 0;
        }
        font-size: 0.90rem;
    }
    h3{
        margin-left: 37px;
        font-family: 'Mukta', sans-serif;
        font-weight: 400;
        margin-top: -29px;
        color: #fff;
    }
    .icon{
        margin-top: 10px;
        margin-left: 10px;
        color: #fff;
        font-size: 1.5rem;
    }
`;

export const Alguel = styled.span`
    float: left;
    width: 49%;
    height: 20%;
    margin-left: 10px;
    margin-top: 10px;
    h3{
        text-align: center;
        font-family: sans-serif;
        margin-left: 5px;
        margin-top: -27px;
        font-weight: 600;
        color: #fff;
    }
    input{
        width: 82%;
        height: 55%;
        margin-left: 6px;
        border: none;
        &:focus{
            outline: none;
        }
    }
    .icon{
        margin-top: 7px;
        margin-left: 36px;
        color: #fff;
        font-size: 1.5rem;
    }

    @media (max-width: 959px) {
        float: left;
    width: 47%;
    height: 20%;
    margin-left: 4px;
    h5{
        text-align: center;
        font-family: sans-serif;
        margin-left: 5px;
        margin-top: -19px;
        font-weight: 600;
    }
    input{
        width: 80%;
        height: 55%;
        margin-left: 6px;
        border: none;
        &:focus{
            outline: none;
        }
    }
    .icon{
        margin-top: 7px;
        margin-left: 28px;
    }
    }

    @media (max-width: 551px) {
        float: left;
    width: 47%;
    height: 20%;
    margin-left: 4px;
    h5{
        text-align: center;
        font-family: sans-serif;
        margin-left: 5px;
        margin-top: -19px;
        font-weight: 600;
    }
    input{
        width: 80%;
        height: 55%;
        margin-left: 6px;
        border: none;
        &:focus{
            outline: none;
        }
    }
    .icon{
        margin-top: 7px;
        margin-left: 5px;
    }
    }
`;

export const Quartos = styled.caption`
    float: right;
    margin-left: 205px;
    margin-top: -99px;
    width: 48.2%;
    height: 20.2%;
    h3{
        text-align: center;
        font-family: sans-serif;
        margin-left: -30px;
        margin-top: -25px;
        color: #fff;
    }
    input{
        width: 82%;
        height: 55%;
        margin-left: 12px;
        border: none;
        &:focus{
            outline: none;
        }
    }
    .icon{
        margin-top: 7px;
        margin-left: -156px;
        color: #fff;
        font-size: 1.5rem;
    }

    @media (max-width: 412px) {
        float: right;
    margin-left: 205px;
    margin-top: -99px;
    width: 48.2%;
    height: 20.2%;
    h3{
        text-align: center;
        font-family: sans-serif;
        margin-left: -30px;
        margin-top: -25px;
        color: #fff;
    }
    input{
        width: 72%;
        height: 55%;
        margin-left: -10px;
        border: none;
        &:focus{
            outline: none;
        }
    }
    .icon{
        margin-top: 7px;
        margin-left: -156px;
        color: #fff;
        font-size: 1.5rem;
    }
    }
 
`;

export const Botao = styled.button`
    float: left;
    width: 85%;
    margin-left: 2rem;
    padding: 0.60rem;
    margin-top: 20px;
    border-radius: 7px;
    border: none;
    background-color: #d0378C;
    color: #fff;
    font-family: 'Mukta', sans-serif;
    font-weight: 800;
    cursor: pointer;
    &:hover{
        filter: brightness(1.1);
    }
`;
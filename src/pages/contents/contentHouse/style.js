import styled from 'styled-components';

export const Principal = styled.div`
    float: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 30%;
        height: 170px;
        border-radius: 10px;
        border: none;
        box-shadow: 0.50rem 0.50rem 0.60rem rgba(0, 0, 0, 0.178);
        h5{
            font-family: 'Mukta', sans-serif;
            float: left;
            color: gray;
            margin-top: 10px;
        }
        .descricao{
            font-family: 'Mukta', sans-serif;
            float: left;
            color: black;
            margin-top: 20px;
        }
        p{
            font-family: 'Mukta', sans-serif;
            margin-top: 20px;
            color: red;
        }
        .local{
            margin-top: 10px;
            color: black;
        }
    }
    h2{
        font-family: monospace;
        margin-top: 30px;
    }

    .on{
        width: 100%;
        height: 200%;
        position: absolute;
        background-color: #fff;
        display: flex;

        h2{
            margin-top: 10px;
        }
        h1{
            margin-top: 20px;
            font-family: 'Mukta', sans-serif;
            font-size: 3rem;
        }
        h2{
            margin-top: 20px;
            font-family: 'Mukta', sans-serif;
            color: gray;
        }
        h5{
            font-size: 1.7rem;
        }
        h3{
            margin-top: 10px;
            font-size: 1.7rem;
            color: red;
            font-family: 'Mukta', sans-serif;
        }
        img{
            width: 600px;
            margin-top: -480px;
        }
        a{
            text-decoration: none;
            color: black;
        }
        button{
            margin-top: 30px;
            padding: 10px;
            width: 30%;
            background-color: #d0378C;
            border-radius: 6px;
            border: none;
            color: #fff;
            font-family: 'Mukta', sans-serif;
            font-weight: bold;
            a{
                color: white;
            }
        }
    }
    .off{
        width: 0%;
        height: 0%;
        h2{
            font-size: 0;
        }
        h3{
            font-size: 0rem;
        }
        h1{
            font-size: 0rem;
        }
        h4{
            font-size: 0rem;
        }
        button{
           margin-top: -100px;
           margin-bottom : -100px;
           opacity: 0;
           width: 2px;
           height: 1px;
           font-size: 0.1rem;
        }
    }



    @media (max-width: 750px) {
        float: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
        div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 60%;
        height: 170px;
        border-radius: 10px;
        border: none;
        box-shadow: 0.50rem 0.50rem 0.60rem rgba(0, 0, 0, 0.178);
        h5{
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            float: left;
            color: gray;
            margin-top: 20px;
        }
        p{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin-top: 30px;
            color: red;
        }
        .local{
            margin-top: 10px;
            color: black;
        }
    }
    }


    @media (max-width: 640px) {
        .on{
        width: 100%;
        height: 200%;
        position: absolute;
        background-color: #fff;
        display: flex;
        justify-content: center;

        h2{
            margin-top: 10px;
        }
        h1{
            margin-top: 20px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        h4{
            margin-top: 20px;
            font-family: 'Courier New', Courier, monospace;
            color: gray;
        }
        h3{
            margin-top: 20px;
            font-size: 1.7rem;
            color: red;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }
        img{
            width: 80%;
            margin-top: -620px;
        }
        a{
            text-decoration: none;
            color: black;
        }
    }
    .off{
        width: 0%;
        height: 0%;
        h2{
            font-size: 0;
        }
        h3{
            font-size: 0rem;
        }
        h1{
            font-size: 0rem;
        }
        h4{
            font-size: 0rem;
        }
    }
    }


    @media (max-width: 450px) {
        div{
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 80%;
        height: 170px;
        border-radius: 10px;
        border: none;
        box-shadow: 0.50rem 0.50rem 0.60rem rgba(0, 0, 0, 0.178);
        h5{
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            float: left;
            color: gray;
            margin-top: 20px;
            font-size: 0.70rem;
        }
        p{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin-top: 30px;
            color: red;
        }
        .local{
            margin-top: 10px;
            color: black;
        }
    }
    }
`;
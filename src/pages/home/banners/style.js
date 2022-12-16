import styled from 'styled-components';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export const Principal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 70%;
    float: left;
    margin-top: -390px;
    img{
        width: 100%;
        cursor: pointer;
    }
    .Banner2{
        img{
            margin-top: 8rem;
        }
    }
    @media (max-width: 1013px) {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        cursor: pointer;
    }
    }

    @media (max-width: 806px) {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        cursor: pointer;
    }
    }

    @media (max-width: 613px) {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        cursor: pointer;
    }
    }


    @media (max-width: 450px) {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        cursor: pointer;
    }
    }


    @media (max-width: 431px) {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        cursor: pointer;
    }
    }
`;
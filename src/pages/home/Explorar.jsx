import { Link } from "react-router-dom";
import { Botao, Global} from "./styles/Explorar";
import ImgHouse from './img/house01.jpeg';
import ImgHouse02 from './img/house2.jpeg';
import ImgHouse03 from './img/house3.jpeg';
import ImgHouse4 from './img/house4.jpeg';
import ImgHouse5 from './img/house5.jpeg';
import ImgHouse6 from './img/house6.jpeg';
import ImgHouse04 from './img/house04.jpeg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const Explorar = ()=>{
    return(
        <>
        <Global>
            <h2>Encontre sua Casa ideal</h2>
            <Carousel responsive={responsive}>
            <div className="block1">
                <img src={ImgHouse} alt="" />
                <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre O Imóvel localizado no Jd. Guanabara`}>
                <h3>Casa jd. Guanabara</h3>
                </a>
                <p>Terreno 5 X 25</p>
                <p>R$ 370.000,00</p>
            </div>
            <div className="block2">
                <img src={ImgHouse02} alt="" />
                <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre o imóvel localizado no Jd. Iporã`}>
                <h3>Casa Jd. Iporã</h3>
                <p>2 Dormitórios sala cozinha e banheiro e garagem</p>
                <p>R$ 370.000,00</p>
                </a>
                </div>
            <div className="block3">
                <img src={ImgHouse03} alt="" />
                <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre o imóvel localizado no Grajaú`}>
                <h3>Casa p renda Grajaú</h3>
                <p>Vende-se</p>
                <p>R$3.000,00/mês</p>
                </a>
            </div>
            <div className="block4">
            <img src={ImgHouse4} alt="" />
            <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre o imóvel localizado no Term Varginha, de 500 metros`}>
                <h3>Jaceguava terceiro lago</h3>
                <p>500 metros terreno</p>
                <p>R$ 850.000,00</p>
                </a>
            </div>

            <div className="block5">
                <img src={ImgHouse5} alt="" />
                <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre o imóvel localizado no Grajaú`}>
                <h3>Sobrado - Term varginha</h3>
                <p>Vende-se</p>
                <p>R$400 mil</p>
                </a>
            </div>

            <div className="block6">
                <img src={ImgHouse6} alt="" />
                <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre o imóvel localizado no Jaceguava, de 44mil metros`}>
                <h3>Quatro casas - Jaceguava</h3>
                <p>44 mil metros</p>
                <p>R$2.000.000,00</p>
                </a>
            </div>
            </Carousel>
            <Link to='housessale'><Botao><button>Ver mais</button></Botao></Link>
        </Global>
        </>
    );
}
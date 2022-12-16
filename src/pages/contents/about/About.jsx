import { Contato, QuemSomos, Rodape, TextoInicial } from "./style"
import Logo from '../../../assets/img/Logos/logo4.png';
import { FaWhatsapp, FaSearchLocation, FaInstagram, FaFacebook } from 'react-icons/fa';

export const About = ()=>{
    return(
        <>
            <TextoInicial>
                <QuemSomos>
                    
                    <img src={Logo} />
                    <p><h3>Sobre Nós</h3><br/>O Grupo Fagundes é uma empresa com sede própria que visa buscar os principais interesses de venda e locação, residencial e comercial. <br/> Para oferecer uma experiência direta, simples e transparente para os seus clientes. <br/> Empresa focada no ramo de imóveis, disponibilizando sempre o melhor atendimento ao cliente. Alugamos, vendemos e administramos: casas, sítios ou chácaras. Venha nos conhecer.
                    </p>
                </QuemSomos>
                <Contato>
                <h3 className="trabalhe_conosco">Trabalhe conosco</h3>
                <FaWhatsapp className="icon_wpp"/>
                <FaInstagram className="icon_insta"/>
                <FaFacebook className="icon_facebook"/>
                </Contato>
                <br/>
            </TextoInicial>
                <Rodape>
                    <p>Fagundes corretor de imóveis | CRECI: 204593-F</p>
                   <p className="local"><FaSearchLocation />  - Localizacação: R. Rocha de Magalhães, 08 - Pq. Maria Fernandes (Próximo a estação Varginha)</p>
                </Rodape>
        </>
    )
}
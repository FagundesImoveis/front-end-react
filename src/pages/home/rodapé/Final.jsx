import { Footer, Principal } from './style';
import santander from './imgs/santander.png';
import BancoDoBrasil from './imgs/bancoDoBrasil.png';
import caixa from './imgs/caixa.png';
import bradesco from './imgs/bradesco.png';
import itau from './imgs/itaú.png';
import { Link } from "react-router-dom";

export const Final = ()=>{
    return(
        <>
            <Principal>
                <div>
                    <button>
                        Financiamento
                    </button>
                    <button className='ofertas'>
                        As melhores ofertas para o seu imóvel
                    </button>
                </div>
                <div className='financiamento'>
                    <a href='https://www.santander.com.br/creditos-e-financiamentos/para-sua-casa/credito-imobiliario?ic=homepf-cardsprod-creditoimobiliario#/dados-pessoais'><img src={santander} alt=""/></a>
                    <a href='https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx?eni_gclid=Cj0KCQjwp86EBhD7ARIsAFkgakg39StNF0YBE3S5bgNiBlnuM-BMJd6hXU5ACfQtaweeFYraleQ5fqUaAlvvEALw_wcB&pk_vid=e096ac2feeed30bf162033156524f1ab'><img src={BancoDoBrasil} alt=""/></a>
                    <a href='https://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso'><img src={caixa} alt=""/></a> 
                </div>
                <div className='financiamentoBancos'>
                <a href='https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm#box1-comprar'><img className='bradesco' src={bradesco} alt=""/></a>
                    <a href='https://ww3.itau.com.br/imobline/novolayout/simuladores/simulador.aspx?IMOB_TipoBKL=&ident_bkl=pre&parceiro=0835'><img className='bradesco' src={itau} alt=""/></a>
                </div>
            </Principal>
                <Footer>
                    <div className='quemsomos'>
                        <h4>Institucional</h4>
                        <Link to='about'><p>Quem Somos</p></Link>
                        <p>Corretores</p>
                    </div>
                    <div className='quemsomos'>
                        <h4>Imóveis</h4>
                        <p> <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de anunciar meu imóvel!!`}>Cadastre seu imóvel</a></p>
                        <p> <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de encomendar meu imóvel!!`}>Encomende seu imóvel</a></p>
                    </div>

                    <div className='quemsomos'>
                        <h4>Serviços</h4>
                        <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de alocar meu imóvel!!`}><p>Cadastro de Propietário</p></a>
                        <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de alocar meu imóvel!!`}><p>Cadastro de Locatário</p></a>
                    </div>
                    <div className='quemsomos'>
                        <h4>Contato</h4>
                        <p> <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, poderia me tirar uma dúvida??!!!`}>Fale conosco</a></p>
                    </div>
                </Footer>
        </>
    )
}
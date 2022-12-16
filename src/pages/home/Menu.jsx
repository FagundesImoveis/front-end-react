
//Importações...

import { Alguel, 
        Botao, 
        Cidade, 
        Container, 
        Content, 
        Linha,
        MenuStyled,
        Pesquisa, 
        Quartos, 
        Tipo 
    } from './styles/Menu';

import { useState, useEffect } from 'react';

import ImagemDeEfeito from '../../assets/img/Imagens Soltas/ImagemEfeito.png';

import Logo from '../../assets/img/Logos/logo4.png';

import { FaCity, FaHouseUser, 
        FaRegMoneyBillAlt, 
        FaBed,
        FaBars,
        FaWhatsapp,
        FaPhoneAlt
    } from 'react-icons/fa';


import { Link, BrowserRouter, Routes, Route  } from 'react-router-dom';


import modal from 'react-modal'
import { Loading } from '../../components/Loading';


//Menu Drop

export const Menu = ()=>{
   
    const [menu, setMenu] = useState('MenuOff');
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('titleMenu');
    const [countLink, setCountLink] = useState(0);

    const menuOpacity = ()=>{
        setMenu('MenuSubOn');
        setCount(count + 1);
        setTitle('titleMenuOn')
        setCountLink(countLink + 1)
        if(count == 1 || countLink == 1){
            setMenu('MenuOff')
            setTitle('titleMenu')
            setCount(count - 1)
            setCountLink(countLink - 1)
        } 
        
    }

//Fim da função que chama o menu drop




//Função de search 

    const [searchCidade, setSearchCidade] = useState([]);
    const [searchTipo, setSearchTipo] = useState([]);
    const [searchQuartos, setSearchQuartos] = useState([]);
    const [painel, setpainel] = useState('');
    const [api, setApi] = useState([]);
    const [valor, setValor] = useState('Aluguel');
    
    function handleSubimit(){
        fetch('https://api-fagundes.vercel.app/search').then(response => response.json()).then(res =>{
            const pesquisando = res.find(res => res.cidade == searchCidade && res.tipo == searchTipo && res.qntdQuartos == searchQuartos)
            if(pesquisando){
                setApi(res)
                setpainel('painel')
            }else{
                setpainel('painelNot')
            }

        })
    }

    function Preco(){
        setValor('Preço')
    }
    
    return(
        <>
            <MenuStyled>
                <nav>
                    <div className={menu}>
                        <Content>
                            <h3>Serviços</h3>
                            <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de anunciar meu imóvel!!`}><p  className={title}>Área do proprietário</p></a>
                            <p  className={title}>Área do locatário</p>
                        </Content>
                    </div >
                    <img src={Logo} alt="Logo Fagundes"/>
                    <FaBars onClick={menuOpacity} className='iconMenu'/>
                    <p className='number'><FaPhoneAlt className='whats' /><a href='#'> (11) 5526-6164</a></p>
                </nav>
            <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre a empresa Fagundes Imóveis`}>
                </a>
                <div className={painel}>
                <h3 className='text'><strong>Não há resultados para a sua pesquisa :(</strong></h3>
                    {api.map(val=>{
                        return(
                            <>
                            <div>
                            <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre O imóvel ${val.titulo} localizado em ${val.cidade} com ${val.qntdQuartos} Dormitórios e com o preço de R$${val.preco}. Poderia me ajudar?!`}>
                                <h2>{val.cidade}</h2>
                                <p className='tipo'>Tipo: {val.tipo}</p>
                                <p className='quartos'>Qntd de Quartos: {val.descricao}</p>
                                <p className='quartos'>Qntd de Quartos: {val.qntdQuartos}</p>
                                <p className='aluguel'><strong>Preço: R$ {val.qntdAluguel}</strong></p>
                            </a>
                            </div>
                            </>
                        )
                    })}
                </div>
                <Pesquisa>
                    <div>
                        <p>Alugar ou Comprar</p>
                        <span className='block1'></span>
                    </div>
                        <span className='block2'></span>

                    <Cidade>
                    <FaCity className='icon'/>
                        <h3>Localidade (Cidade) </h3>
                        <input value={searchCidade} onChange={(e)=> setSearchCidade(e.target.value)} name="cidade" type="text" placeholder='Digite sua cidade...'/>
                    </Cidade>

                    <Tipo>
                    <FaHouseUser className='icon'/>
                        <h3>Tipo</h3>
                        <input value={searchTipo} onChange={(e)=> setSearchTipo(e.target.value)} name="tipos" type="text" placeholder='Ex: Todos os imovéis'/>
                    </Tipo>

                    <Alguel>
                        <FaRegMoneyBillAlt className='icon' />
                        <h3>{valor} até</h3>
                        <input name="qntdAluguel" type="Number" placeholder='Digite o valor'/>
                    </Alguel>

                    <Quartos>
                        <FaBed className='icon' />
                        <h3>Quartos</h3>
                        <input value={searchQuartos} onChange={(e)=> setSearchQuartos(e.target.value)} name="qntdQuartos" type="Number" placeholder='Digite o Nº de quartos'/>
                    </Quartos>
                  <Botao onClick={handleSubimit}>Buscar</Botao>
                </Pesquisa>
            </MenuStyled>
        </>
    );
}

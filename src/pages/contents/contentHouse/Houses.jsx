import { Principal } from "./style"
import { useEffect, useState } from 'react';

export const Houses = ()=>{
    const [conteudo, setConteudo] = useState([]);
    const [painel, setPainel] = useState('off');
    const [objeto, setObjeto] = useState([]);
    
    useEffect(()=>{
        fetch('https://api-fagundes.vercel.app/')
        .then(response=> response.json())
        .then(json => {
            setConteudo(json)
            console.log(json)
        });
    }, []);


    return(
        <>
            <Principal>
                <h2>Casas disponiveis</h2>
                <div className={painel}>
                    <img src={objeto.url} alt="" />
                    <a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de anunciar meu imóvel!!`}>
                    <h1>{objeto.titulo}</h1>
                    </a>
                    <h2>{objeto.cidade} - {objeto.qntdQuartos} Quartos</h2>
                    <h5 className="descricao">{objeto.descricao}</h5>
                    <h3>Preço: R${objeto.preco}</h3>
                    <button><a href={`https://api.whatsapp.com/send?phone=551155266144&text=Olá, Eu gostaria de saber mais sobre o imóvel ${objeto.titulo}!!`}>Essa é minha!</a></button>
                </div>
               {conteudo.map(val =>{
                
                return(
                <div onClick={() =>{
                    setPainel('on')
                    setObjeto(val)
                }}>    
                    <p className="local"><strong>{val.cidade}</strong></p>
                    <h5>{val.tipo} - {val.qntdQuartos} Dormitórios</h5>
                    <h5>{val.descricao}</h5>
                    <p><strong>Preço: R${val.preco}</strong></p>
                </div>
                )
               })}
            </Principal>
        </>
    )
}
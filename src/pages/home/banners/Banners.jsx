import { Link } from 'react-router-dom';
import Banner1 from '../img/banner2.png';
import { Principal } from './style';
import Banner2 from '../img/banner1.png';
import Banner3 from '../img/banner3.png';
import Banner4 from '../img/banner4.png';
import Banner5 from '../img/banner5.jpeg';

import { Splide, SplideSlide } from '@splidejs/react-splide';

export const Banners = ()=>{

    return(
        <>
            <Principal>
            <Splide aria-label="My Favorite Images">
            <SplideSlide className='Banner2'>
            <Link to='housessale'><img src={Banner5} alt="" width="1000px"/></Link>
            </SplideSlide>
            <SplideSlide>
            <Link to='housessale'><img src={Banner3} alt="" width="1000px"/></Link>
            </SplideSlide>
            </Splide> 
            <a href={`https://www3.bcb.gov.br/CALCIDADAO/publico/exibirFormCorrecaoValores.do?method=exibirFormCorrecaoValores`}><img src={Banner4} alt="" width="1000px"/></a> 
            </Principal>

        </>
    )   
}
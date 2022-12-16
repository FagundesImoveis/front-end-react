import LoadingSvg from '../assets/img/svg/Loading.svg';
import { Loading_style } from './style';

export const Loading = ()=>{
    return(
        <>
        <Loading_style>
            <h1>Carregando...</h1>
            <img src={LoadingSvg} alt="Loading" /> 
        </Loading_style>     
        </>
    )
};

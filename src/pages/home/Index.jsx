import { Banners } from "./banners/Banners";
import { Explorar } from "./Explorar";
import { Menu } from "./Menu";
import { Final } from "./rodapé/Final";

export const Index = ()=>{
    return(
        <>
            <Menu />
            <Explorar />
            <Banners />
            <Final />
        </>
    );
}
import { Card } from "../../components/CardProduto";
import './styles.css'

export function Vitrine(){
    return(
        <div className="cards">
        <Card to={'/vitrine'}/>
        </div>
    )
}
import CategoriaForm from '../../components/CategoriaForms/categoriaForm'
import styles from './categoriaStyle.css'

function AdicionarCategoria(){
    return (
        <div className= {styles.novacategoria_container}>
        <h1>Adicionar Categoria</h1>
        <p> Cadrastre a Categoria para depois adicionar produtos</p>
        <p>CategoriaForm</p>
    </div>
    )
   
}
export default AdicionarCategoria

import CategoriaForm from '../../components/CategoriaForms/categoriaForm'
import './categoriaStyle.css'


export const Categoria= () => {
    return (
        <>
        <div className="novacategoria_container">
        <h1>Categorias</h1>
        <p>Cadastre a Categoria:</p>
        <CategoriaForm/>
        </div>
   
        </>

    )
   
}


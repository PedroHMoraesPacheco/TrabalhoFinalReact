import styles from './categoriaFormStyle.css'

function CategoriaForm() {
    return (
        <form className= {styles.form}>
            <div>
                <input type= "text" placeholder="Insira o nome da Categoria"/>
            </div>
            <div>
                <input type= "text" placeholder="Insira a descrição da Categoria"/>
            </div>
            <div>
                <input type="submit" value="Criar projeto"/>
            </div>
        </form>


    )

}

export default CategoriaForm
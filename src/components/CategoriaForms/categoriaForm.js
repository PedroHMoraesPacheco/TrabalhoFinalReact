import  './categoriaFormStyle.css'
import Input from '../Form/input'

export default function CategoriaForm () {

    return (
        <>
        <form className= 'form'>
            <Input 
                type="text"
                text="Nome da Categoria" 
                name="name" 
                placeholder="Insira o nome da categoria"
            />

            <Input 
                type="text"
                text="Descrição da Categoria" 
                name="name" 
                placeholder="Insira a descrição da categoria"
            />
            
            <div>
                <input type="submit" value="Cadastrar"/>
            </div>
        </form>

        </>
        

    )

}

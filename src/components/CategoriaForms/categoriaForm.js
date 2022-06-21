import  './categoriaFormStyle.css'
import Input from '../Form/input'
import Button from '../../components/Button';

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
                    <div className='div'>
                          <Button to={'/categoria'} text='Cadastro'/>
                    </div>       
                    <div className='div'>
                          <Button to={'/categoria'} text='Listagem'/>
                    </div>               
                    
        </form>

        </>
        

    )

}

import React,{useContext, useState} from 'react' ;
import{CategoriaContext} from '../context/CategoriasContext' ;
import {RecetasContext} from '../context/RecetasContext' ;

const Formulario = () => {

    
    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    }) ;

    const {categorias} = useContext(CategoriaContext) ;
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext) ;

    //Funcion para leer los contenidos 
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value})
        
    } ;
    

    return ( 
        <form 
            action=""
            className='col-12'
            onSubmit={e =>{
                e.preventDefault()
                buscarRecetas(busqueda)
                guardarConsultar(true)
            }}
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por categoria o ingredientes</legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        type="text"
                        name='nombre'
                        className='form-control'
                        placeholder='Buscar por Ingrediente'
                        onChange={obtenerDatosReceta}

                    />
                </div>
                <div className='col-md-4'>
                    <select 
                        name="categoria" 
                        id=""
                        className='form-control'
                        onChange={obtenerDatosReceta }
                    >
                        <option value="">--Selecciona Categoria-- </option>
                        {categorias.map(categoria => (
                                <option 
                                    key={categoria.strCategory} 
                                    value={categoria.strCategory}
                                
                                >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className='col-md-4'>
                    <input 
                        type="submit"
                        className='btn btn-block btn-primary'
                        value='Buscar bebidas'
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;
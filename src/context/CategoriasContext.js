import axios from 'axios';
import React,{createContext, useState, useEffect} from 'react';

// Crea el context
export const CategoriaContext = createContext() ;

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    
    //Crear el state del Context
    const [categorias, guardarCategoria] = useState([]) ;

    //ejecutar el llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url ='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url) ;

            guardarCategoria(categorias.data.drinks) ;
        }
        obtenerCategorias()

    }, []);

    return (
        <CategoriaContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}

        </CategoriaContext.Provider>
    )

}

export default CategoriasProvider ;
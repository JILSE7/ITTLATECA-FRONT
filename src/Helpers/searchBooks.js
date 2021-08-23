
/* export const searchBooks = (books, search) => {
    let Busqueda = [];
    let searchByCategory = [];

    const searchName = books.filter(book => book.nombre.includes(search));
    const searchAutor = books.filter(book => book.autor.includes(search));
    //Busqueda para encontrar el libro que contenga la categoria
    books.forEach(book => {
            const categoria = book.categoria.filter(category => category.includes(search));
            if(categoria.length >=1){
                console.log(book);
                searchByCategory = book;
            }
    });
         console.log('categoria',searchByCategory);
         console.log('Nombre',searchName);
         console.log('autor', searchAutor);

        //if(searchName.length >= 1) Busqueda= [...Busqueda, ...searchName];
        //if(searchAutor.length >= 1) Busqueda= [...Busqueda, ...searchAutor];
        //if(searchByCategory.length >= 1) Busqueda= [...Busqueda, ...searchByCategory];
        //console.log(searchByCategory);

       // console.log('Resultado final',Busqueda);

    //console.log('category',searchByCategory);

} */

import { fetchConToken } from "./fetch"



export const busquedaBooks = async(search) => {
    const validacionSearch = escapeRegExp(search);
    const busqueda = await (await fetchConToken(`libros/${validacionSearch}`)).json();

    console.log(busqueda);
    return busqueda;
};

function escapeRegExp (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '[$&]')
};


export const identificarLibro = async(id) => {

    const libro = await (await fetchConToken(`libros/${id}`)).json();
    
    return libro;
    
};


export const indentificarLibroState = (libros, id) => {
    const libro = libros.filter(libro => libro.idLibro === id);

    return libro
}



export const libroTable = (arreglo, search) => {
       //Capitalizando la busqueda para los nombres
       let searchCapi = '';
       if(search) searchCapi =  search[0].toUpperCase() +  search.slice(1);

    //Haciendo los filttros
    const searchByName = arreglo.filter(libro => libro.nombre.includes(search) || libro.nombre.includes(search.toUpperCase()) );
    const searchByAutor = arreglo.filter(libro => libro.autor.includes(search) || libro.autor.includes(search.toUpperCase()) || libro.autor.includes(searchCapi));
    const searchByEditorial = arreglo.filter(libro => libro.editorial.includes(search) || libro.editorial.includes(search.toUpperCase()) );

          //Haciendo un arreglo con los resultados
          const results = [...searchByName, ...searchByAutor,...searchByEditorial]
  
        return eliminarDuplicados(results, arreglo)
};



export const busquedUsuario = (arreglo, search) => {
    //Capitalizando la busqueda para los nombres
    let searchCapi = '';
    if(search) searchCapi =  search[0].toUpperCase() +  search.slice(1);

    //Haciendo los filttros
    const searchByName = arreglo.filter(user => user.nombre.includes(search) || user.nombre.includes(search.toUpperCase()) || user.nombre.includes(searchCapi));
    const searchByNumeroC = arreglo.filter(user => user.numeroC.includes(search) || user.numeroC.includes(search.toUpperCase()) );

       //Haciendo un arreglo con los resultados
       const results = [...searchByName, ...searchByNumeroC]

    return eliminarDuplicados(results, arreglo)

}



const eliminarDuplicados = (results, arreglo) => {

      //Eliminando los duplciados
      let noduplicados = new Set(results);
      
      //regresando el valor
      if(noduplicados.size === arreglo.length){
          noduplicados = []
      }else{
          noduplicados = [...noduplicados]
      }
      
      return noduplicados;
};



export const prestamosNoDevueltos = (arreglo) => arreglo.filter(prestamo => prestamo.devolucion === false);


export const busquedaPrestamos = (arreglo, search) => {
    //Haciendo los filttros
    const searchById = arreglo.filter(prestamo =>  prestamo.idPrestamo.includes(search) );
    console.log(searchById);
        let result = [];

        //regresando el valor
        if(searchById.length !== arreglo.length){
            console.log('entre');
            result = [...searchById]
        }
        
        return result;
}


export const busquedaUsuarioModal = (arreglo, search) => {
    //Capitalizando la busqueda para los nombres
    let searchCapi = '';
    if(search) searchCapi =  search[0].toUpperCase() +  search.slice(1);

    //Haciendo los filttros
    const searchByName = arreglo.filter(user => user.nombre.includes(search) || user.nombre.includes(search.toUpperCase()) || user.nombre.includes(searchCapi));

    console.log(searchByName);
}

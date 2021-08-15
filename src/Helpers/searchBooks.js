
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

    const busqueda = await (await fetchConToken(`libros/${search}`)).json();

    console.log(busqueda);
    return busqueda;
}
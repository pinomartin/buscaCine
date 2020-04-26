//Instanciar ambas clases
const moviedb = new MovieDB();
const ui = new Interfaz();

//Event Listener Boton
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    //Leer el texto del input Buscar nombre
    const textBuscador = document.getElementById('nombre-pelicula').value;

    //Leer el select Generos
    const generos = document.getElementById('listado-generos');
    const generoSeleccionado = generos.options[generos.selectedIndex].value;

    //Valida Buscador Nombre
    if(textBuscador !== ''){
        //Cuando si hay algo que buscar
        moviedb.getNombre(textBuscador)
            .then(peliculas => {
                //Si hay Peliculas....
                if(peliculas.peliculas.results.length > 0){
                    ui.limpiarResultados();
                    //Si encuentra Peliculas
                    ui.mostrarPeliculas(peliculas.peliculas);
                }else{
                   //No hay Eventos, mostrar Alerta
                   ui.mostrarMensaje('No hay Resultados','alert alert-danger mt-4');
                }
            })
    }else{
        //Mostrar mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador','alert alert-danger mt-4')
    }
    
})
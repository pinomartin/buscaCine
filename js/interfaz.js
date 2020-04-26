class Interfaz{
    constructor(){
        //Inicializa la app al instanciar
        this.init();
        //Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    //Metodo para cuando inicialice la app
    init(){
        //Llamado a imprimir generos de la rest API
        this.imprimirGeneros();
    }

    //Imprimir generos
    imprimirGeneros(){
        const listaGeneros = moviedb.getGeneros()
                .then(generos => {
                    const gens = generos.generos.genres;
                    console.log(gens);
                    //Seleccionar el select(Form) de generos
                    const selectGeneros = document.getElementById('listado-generos')
                    //Recorremos el arreglo de generos y llenamos los options
                    gens.forEach(gen => {
                        const option = document.createElement('option');
                        option.value = gen.id;
                        option.appendChild(document.createTextNode(gen.name));
                        selectGeneros.appendChild(option);
                    })
                })
    }

    //Lee la respuesta de la API e Imprime los resultados
    mostrarPeliculas(peliculas){
        //Leer las peliculas y agregarlas a una variable
        const listaPeliculas = peliculas.results;
        
        //Recorrer las peliculas y crear el Template
        listaPeliculas.forEach(pelicula => {
            this.listado.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body centrar">
                                <img class="img-responsive mb-2" src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}">
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <h2 class="text-center">${pelicula.title}</h2>
                                    <p class="lead text-info">Sinopsis</p>
                                    <p>${pelicula.overview.substring(0,280)}...</p>
                                    <span class="badge badge-secondary">Idioma Original: ${pelicula.original_language}</span>
                                    <span class="badge badge-primary">Año de Estreno: ${pelicula.release_date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
        })
    }

    //Limpia los resultados previos
    limpiarResultados(){
        this.listado.innerHTML = '';
    }


    //Metodo que imprime mensajes: 2 Parametros (Mensaje,Clases de Estilo)
    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.classList = clases;
        //Agregar Texto al div
        div.appendChild(document.createTextNode(mensaje))
        //Buscar un padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        //Quitar Mensaje luego de 3segundos
        setTimeout(()=>{
            this.limpiarMensaje();
        },3000);
    }

    //Desaparece el mensaje en caso de que formulario este OK
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }


}
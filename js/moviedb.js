class MovieDB{
    constructor(){
        this.token_auth = '674a6ef5377de277c8d3a10076bca897';
        this.ordenar = 'popularity.desc';
    }

    //Obtener Peliculas Mostrar resultados Busqueda
    async getNombre(nombre){
        const respuestaPelicula = await fetch
        (`https://api.themoviedb.org/3/search/movie?api_key=${this.token_auth}&language=es-ES&query=${nombre}&include_adult=false&sort_by${this.ordenar}`)

        //Esperar la respuesta de la pelicula y retornar un JSON
        const peliculas = await respuestaPelicula.json();

        return{
            peliculas
        }
    }



    //Obtiene las generos en init() para luego llenar el Select Genero en Clase Interfaz
    async getGeneros(){
        //Consultar generos de la rest API de MovieDB
        const respuestaGeneros = await fetch
        (`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.token_auth}&language=es-ES`);

        //Esperar por la respuesta de las categorias y retornar un JSON
        const generos = await respuestaGeneros.json();

        //Retorna el resultado
        return{
            generos 
        }
    }
}
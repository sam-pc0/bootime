
const host = "http://35.185.76.18"


export const bookList = [
  {"IDLibro":"","Titulo":"Cari\u00f1o","Autor":"Agripino","Anio":"1995","Genero":"Romantico","Sinopsis":"El bello cuento de un bello ser"},{"IDLibro":"13","Titulo":"El t\u00fanel","Autor":"Ernesto S\u00e1bato","Anio":"1990","Genero":"novela policial","Sinopsis":"La historia de un asesinato, desde la mente del homicida"},{"IDLibro":"GHGH","Titulo":"ciencias sociales","Autor":"Santillana","Anio":"202092","Genero":"fksajfk","Sinopsis":"fddskfj"},{"IDLibro":"_0429brhqp","Titulo":"El cumplea\u00f1os de Juan \u00c1ngel","Autor":"Mario Benedetti","Anio":"2010-07-15","Genero":"Poetry","Sinopsis":"En El cumplea\u00f1os de Juan \u00c1ngel, novela en verso, Mario Benedetti da forma al m\u00e1s experimental de "},{"IDLibro":"_0k7rbhzap","Titulo":"Napole\u00f3n","Autor":"Alexandre Dumas","Anio":"2012-11-22","Genero":"Biography & Autobiography","Sinopsis":"La historia de Napole\u00f3n ha dado lugar a una producci\u00f3n bibliogr\u00e1fica oce\u00e1nica que ha invadido la"},{"IDLibro":"_0p8vx1x23","Titulo":"O Rei Coelho","Autor":"Jim McEnroe","Anio":"2016-03-22","Genero":"Juvenile Fiction","Sinopsis":"O Rei Coelho: Reinado Lepordeos comea com Hare, um coelho rfo, que se tornou rei. Hare v esperana em"},{"IDLibro":"_0weur80bq","Titulo":"Maquiavelo","Autor":"Israel Covarrubias","Anio":"2017-11-17","Genero":"Political Science","Sinopsis":"Podemos criticar a Maquiavelo e incluso mostrar sus limitaciones, pero no puede estudiarse pol\u00edtica"},{"IDLibro":"_0y8y09hqb","Titulo":"Charles Dickens","Autor":"Michael Slater","Anio":"2009-11-10","Genero":"Authors, English","Sinopsis":"This long-awaited biography, twenty years after the last major account, uncovers Dickens the man thr"},{"IDLibro":"_1jl0zl4rh","Titulo":"Los Allende","Autor":"G\u00fcnther Wessel","Anio":"2004","Genero":"Biography & Autobiography","Sinopsis":"Los Allende son los Kennedy de Latinoam\u00e9rica. Ya a mediados del siglo IXX el \"rojo\" Allende luch\u00f3 "},{"IDLibro":"_2b1a160ok","Titulo":"Raptors of the World","Autor":"James Ferguson-Lees","Anio":"2001","Genero":"Nature","Sinopsis":"More than two thousand full-color illustrations, along with detailed descriptions, information on be"},
]


const connectionGet = (url) => {
  return fetch(url)
  .then(response => response.json())
  .catch(err => err)
}
const connectionPost = (url, data) => {

  return fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => true)
    .catch(error => false)
};

export const acGetBookById = (id) => {
  // fetch("url")
  // .then((response) => response.text.json() )
  return {
    id: "_lkhkhluh",
    title: 'El Quijote',
    author: "Cervantes",
    year: "1250",
    gender: 'Fantasía',
    synopsis: "un viejo loco que esta menos loco que la sociedad"
  }
}
export const acGetUserDataByCarnet = (carnet) => connectionGet(host +"/carnet.php?carnet="+carnet);
export const acGetCarnetList = () => connectionGet(host + "/carnetlist.php");
export const acPostBook = (data) => connectionPost(host+ "/libro.php", data)
export const acPostUser = (data) => connectionPost(host + "/carnet.php",data);


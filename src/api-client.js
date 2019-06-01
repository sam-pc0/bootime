
const host = "http://35.185.76.18"

const connectionGet = (url) => {
  return fetch(url)
  .then(response => response.json())
  .catch(err => alert(err))
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



export const acGetUserDataByCarnet = (carnet) => {
  // fetch("url")
  // .then((response) => response.text.json() )
  return {
    carnet: "13",
    name: 'samy',
    age: "20",
    gender: "m",
    address: 'jutiapa',
    email: "soyguapo@gmail.com",
    bookList: [
      {
        id: "654654",
        title: "El quijote",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote1",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote2",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote3",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote4",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote5",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote6",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote7",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote8",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote9",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote10",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
      {
        id: "654654",
        title: "El quijote11",
        author: "Cervantes",
        year: "1250",
        gender: "Fantasita",
        synopsis: "Un hombre loco, pero, no tan loco como la sociedad",
      },
    ]
  }
}

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
export const acGetCarnetList = () => connectionGet(host + "/carnetlist.php");
export const acPostBook = (data) => connectionPost(host+ "/libro.php", data)
export const acPostUser = (data) => connectionPost(host + "/carnet.php",data);


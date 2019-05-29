export const acGetCarnetList = () => {
  // fetch("url")
  // .then((response) => response.text.json() )
  return ['13','0505171268','0505171267','0505171265','0505171262','0505171267','0505171262']
  
}

export const acGetUserDataByCarnet = (carnet) => {
  // fetch("url")
  // .then((response) => response.text.json() )
  return {
    name: 'sam',
    age: "20",
    gender: "m",
    address: 'jutiapa',
    email: "soyguapo@gmail.com",
    bookList: ["bookid1","bookid2","bookid3","bookid4","bookid5","bookid6"]
  }
}

export const acGetBookById = (id) => {
  // fetch("url")
  // .then((response) => response.text.json() )
  return {
    title: 'El Quijote',
    author: "Cervantes",
    year: "1250",
    gender: 'Fantasía',
    synopsis: "un viejo loco que esta menos loco que la sociedad"
  }
}

export const acPutBook = (book) =>{
  // fetch("url",{
  //   method: 'POST',
  //   body: book,
  // })
  // .then((response) => response);

  return true;
}

export const acPutUser = (user) =>{
  // fetch("url",{
  //   method: 'POST',
  //   body: user,
  // })
  // .then((response) => response);

  return true;
}
const acGetCarnetList = () => {
  // fetch("url")
  // .then((response) => response.text.json() )
  return {
    carnets: ['0505171269','0505171268','0505171267','0505171265','0505171262','0505171267','0505171262']
  }
}

const acGetUserByCarnet = (carnet) => {
  // fetch("url")
  // .then((response) => response.text.json() )
  return {
    user: {
      name: 'sam',
      age: "20",
      gender: "m",
      address: 'jutiapa',
      email: "soyguapo@gmail.com"
    }
  }
}

const acGetBoobById = (id) => {
  // fetch("url")
  // .then((response) => response.text.json() )
  return {
    book: {
      title: 'sam',
      author: "20",
      year: "m",
      gender: 'jutiapa',
      synopsis: "soyguapo@gmail.com"
    }
  }
}
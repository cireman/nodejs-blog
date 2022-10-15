//* Email y contraseña del usuario

const {getUserByEmail} = require('../users/users.controllers')

//? El email es unico en mi base de datos

const loginUser = (email, password) => {
  getUserByEmail(email)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = loginUser
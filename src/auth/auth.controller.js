//* Email y contraseña del usuario

const {getUserByEmail} = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')


//? El email es unico en mi base de datos

//? Un servidor contiene la API
//? Otro servidor contiene la base de datos

const loginUser = async (email, password) => {
  //* Este controlador tiene 2 posibles respuestas
  //* 1 Las credenciales son validas y retorna el usuario
  //* 2 Las credenciales son invalidas y retorna false
  try {
    const user = await getUserByEmail(email)
    //? user.password contiene la contraseña encriptada de mi base de datos
    const verifyPassword = comparePassword(password, user.password)
    if(verifyPassword) {
      return user
    }
    return false
  } catch (err){
    return false
  }

  
  // getUserByEmail(email)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
}

// loginUser("jhon@dou.com", "ST123")
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => console.log(err))


module.exports = {
  loginUser
}
const bcrypt = require('bcryptjs')

const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10)
}

//? Comparar si la contraseña root es = a $2a$10$Ub1r2GSx9gsVNLs1tyV4tOvc3xm.MS.hspHLQvFIZx3TcIkrqhA82
const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}


module.exports = {
  hashPassword,
  comparePassword
}


// console.log(hashPassword('root'))

// console.log(comparePassword('root', '$2a$10$Ub1r2GSx9gsVNLs1tyV4tOvc3xm.MS.hspHLQvFIZx3TcIkrqhA82'))


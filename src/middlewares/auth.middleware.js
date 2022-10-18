//? Middleware para proteger rutas


// TODO 1 - Revisar si existe un token
// TODO 2 - Verificar si el token pertenece a un usuario valido
// TODO 3 - Modificar el req y agregar req.user con la informacion desencriptada del token

//* Estrategia: Diferentes maneras de hacer un login (con facebook, google, jwt, github)

//? Passport maneja estrategias para las diferente autenticaciones
const { jwtSecret } = require('../config')
const { getUserById } = require('../users/users.controllers')
const JwtStrategy = require('passport-jwt').Strategy

//? Extrae los header de la peticion
const ExtractJwt = require('passport-jwt').ExtractJwt

//? Exportando funcion anonima
module.exports = (passport) => {
  const options = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: jwtSecret
  }
  passport.use(
    new JwtStrategy(options, async(decoded, done) => {
      //? done(error, decoded)
      try {
        const response = await getUserById(decoded.id)
        if(!response){
          return done(null, false)
        }
        console.log('decoded JWT', decoded)
        return done(null, decoded)
      } catch (error) {
          return done(error, false)
      }
    })
  )
}
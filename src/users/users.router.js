const router = require('express').Router()

const passport = require('passport')
const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)



//? Rutas raiz 
router.get('/', passport.authenticate('jwt', {session: false}), userServices.getAllUsers)

//TODO el registerUSer ira en la ruta /auth/register

//?Ruta de informacion que solo el usuario loggeado puede user
router.route('/me')
  .get(passport.authenticate('jwt', {session: false}), 
  userServices.getMyUser)
  // .patch()
  // .delete()

//? Rutas dinamicas por ID
//? Esta es una opcion mas ordenada
//? /api/v1/users/:id
router.route('/:id')
  .get(userServices.getUserById)
  .patch(userServices.pathUser)
  .delete(userServices.deleteUser)




/*
? Este es una opcion para rutas dinamicas por ahi
*router.get('/:id')
*router.patch('/:id')
*router.put('/:id')
*router.delete('/:id')
*/

module.exports = router
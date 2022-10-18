const router = require('express').Router()

const passport = require('passport')
const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)



//? Rutas raiz 
router.get('/', passport.authenticate('jwt', {session: false}), userServices.getAllUsers)

//TODO el registerUSer ira en la ruta /auth/register

//? Rutas dinamicas por ID
//? Esta es una opcion mas ordenada
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
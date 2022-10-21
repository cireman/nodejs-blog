const router = require('express').Router()
const adminValidate = require('../middlewares/role.middleware')
const passport = require('passport')
const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)



//? Rutas raiz 
router.get('/', passport.authenticate('jwt', {session: false}), userServices.getAllUsers)

//TODO el registerUSer ira en la ruta /auth/register

//?Ruta de informacion que solo el usuario loggeado puede user
router.route('/me')
  .get(passport.authenticate('jwt', {session: false}), 
  userServices.getMyUser
  )
  .patch(
    passport.authenticate('jwt', {session: false}),
    userServices.patchMyUser
  )
  .delete(
    passport.authenticate('jwt', {session: false}),
    userServices.deleteMyUser
  )

//? Rutas dinamicas por ID
//? Esta es una opcion mas ordenada
//? /api/v1/users/:id
router.route('/:id')
  .get(userServices.getUserById)
  .patch(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    userServices.pathUser)
  .delete(
    passport.authenticate('jwt', {session: false}),
    userServices.deleteUser)




/*
? Este es una opcion para rutas dinamicas por ahi
*router.get('/:id')
*router.patch('/:id')
*router.put('/:id')
*router.delete('/:id')
*/

module.exports = router
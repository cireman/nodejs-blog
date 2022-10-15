const router = require('express').Router()

const userServices = require('./users.services')

//? Rutas raiz 

router.get('/', userServices.getAllUsers)

//TODO el registerUSer ira en la ruta /auth/register

//? Rutas dinamicas por ID
//? Esta es una opcion mas ordenada
router.route('/:id')
  .get(userServices.getUSerById)
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
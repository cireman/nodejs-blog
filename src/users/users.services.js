const usersControllers = require('./users.controllers')


const getAllUsers = (req, res) => {
  usersControllers.getAllUsers()
    .then((response) => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getUserById = (req, res) => {
  const id = req.params.id
  usersControllers.getUserById(id)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(404).json({message: err.message})
    })
}

const registerUser = (req, res) => {
  const {firstName, lastName, email, password, phone, birthday, gender, country} = req.body

  if(firstName && lastName && email && password && phone && birthday){
    //* Ejecutamos el controller
    usersControllers.createUser({
      firstName, lastName, email, password, phone, birthday, gender, country
  })
      .then(response => {
        res.status(201).json(response)
      })
      .catch(err => {
        res.status(400).json(err.message)
      })
  } else {
    //* Error cuando no mandan todos los datos necesarios para crear un usuario
    res.status(400).json({message: 'All fields must be completed', field: {
      firstName: 'STRING',
      lastName: 'STRING',
      email: 'example@example.com',
      password: 'STRING',
      phone: '+521212121212',
      birthday: 'YYYY/MM/DD',
    }})
  }
}

const pathUser = (req, res) => {
  const id = req.params.id
  const {firstName, lastName, phone, birthday, gender, country} = req.body

  usersControllers.updateUser(id, {firstName, lastName, phone, birthday, gender, country})
    .then(response => {
      if(response[0]) {
        res.status(200).json({message: `User with ID: ${id}, edited succesfully`})
      } else {
        res.status(400).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteUser = (req, res) => {
  const id = req.params.id
  usersControllers.deleteUser(id)
    .then(response => {
      if(response){
        res.status(204).json()
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  pathUser,
  deleteUser
}
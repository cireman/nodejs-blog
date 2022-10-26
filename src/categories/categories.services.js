const categoryControllers = require('./categories.controller')

//* /categories
const getAllCategories = (req, res) => {
  categoryControllers.getAllCategories()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

//* /categories/:id
const getCategoryById = (req, res) => {
  const id = req.params.id
  categoryControllers.getCategoryById(id)
    .then(response => {
      if(response){
        res.status(200).json(response)
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

//* /categories
const postCategory = (req, res) => {
  const {name} = req.body

  if(name){
    categoryControllers.createCategory(name)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
  } else {
    res.status(400).json({message: 'Missing data'})
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  postCategory
}
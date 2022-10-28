const postControllers = require('./posts.controller')
const {host} = require('../config')


const getAllPosts = (req, res) => {

  //? localhost:9000/api/v1/posts?offset=0&limiet=20
  const offset = Number(req.query.offset) || 0
  const limit = Number(req.query.limit) || 10
  //? offset: donde inicia
  //? limit: cantidad maxima de entidades a mostrar por pagina

  const urlBase = `${host}/api/v1/posts`

  postControllers.getAllPosts(offset, limit)
    .then(response => {
      res.status(200).json({
        next: `${urlBase}?offset=${offset + limit}&limit=${limit}`,
        prev: `${urlBase}`,
        offset,
        limit,
        results: response
      })
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const createPost = (req, res) => {
  const userId = req.user.id
  const { title, content, categoryId } = req.body

  if(title && content && categoryId) {
    postControllers.createPost({title, content, userId, categoryId})
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        title: 'string',
        content: 'string',
        categoryId: 'integer'
      }
    })
  }
}

const getPostsByCategory = (req, res) => {
  const categoryId = req.params.id
  postControllers.getPostsByCategory(categoryId)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  createPost,
  getAllPosts,
  getPostsByCategory
}
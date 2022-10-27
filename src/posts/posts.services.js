const postControllers = require('./posts.controller')


const getAllPosts = (req, res) => {
  postControllers.getAllPosts()
    .then(response => {
      res.status(200).json(response)
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
        categoryId: 'uuid'
      }
    })
  }
}

module.exports = {
  createPost,
  getAllPosts
}
const router = require('express').Router()

const { getPostsByCategory } = require('../posts/posts.services')
const categoryServices = require('./categories.services')

router.route('/')
  .get(categoryServices.getAllCategories)
  .post(categoryServices.postCategory)

router.get('/:id', categoryServices.getCategoryById)

router.get('/:id/posts', getPostsByCategory )

module.exports = router
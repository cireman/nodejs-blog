const Posts = require('../models/posts.models')
const uuid = require('uuid')

const getAllPosts = async() => {
  const data = await Posts.findAll()
  return data
}

const getPostsById = async(id) => {
  const data = await Posts.findOne({
    where: {
      id
    }
  })
  return data
}

const createPost = async(data) => {
  const assigData = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    createdBy: data.userId, //* Este es el user id que viene desde el token del usuario
    categoryId: data.categoryId
  })
  return assigData
}

module.exports = {
  getAllPosts,
  getPostsById,
  createPost

}
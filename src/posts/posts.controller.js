const Posts = require('../models/posts.models')
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')

const uuid = require('uuid')

const getAllPosts = async(offset, limit) => {
  const data = await Posts.findAndCountAll({
    offset: offset,
    limit: limit,
    include: [
      {
        model: Users,
        as: 'user',
        attributes: ['id','firstName', 'email']
      },
      {
        model: Categories,
        as: 'category',
        attributes: {
          exclude: ['id']
        }
      }
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'categoryId', 'userId']
    }
  })
  return data
}

//La tabla pibote recibe un join y luego hace join en el otro extremos:
// Posts -> PostsCategories -> Categories 
//* Posts.findAll({
//*   include: [{
//*     model: postCategories,
//*     include: [{
//*       model: Categories
//*     }]
//*   }]
//* })

const getPostsById = async(id) => {
  const data = await Posts.findOne({
    where: {
      id
    },
    include: [
      {
        model: Users,
        as: 'user',
        attributes: ['id','firstName', 'email'],
      },
      {
        model: Categories,
        as: 'category',
        attributes: {
          exclude: ['id']
        }
      }
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'categoryId']
    }
  })
  return data
}

const createPost = async(data) => {
  const assigData = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    userId: data.userId, //* Este es el user id que viene desde el token del usuario
    categoryId: data.categoryId
  })
  return assigData
}

const getPostsByCategory = async(categoryId) => {
  const data = await Posts.findAll({
    where: {
      categoryId
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })
  return data
}

module.exports = {
  getAllPosts,
  getPostsById,
  createPost,
  getPostsByCategory
}
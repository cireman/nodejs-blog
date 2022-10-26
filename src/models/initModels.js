const Users = require('./users.models')
const Posts = require('./posts.models')
const Categories = require('./categories.models')

const initModels = () => {

    //* 1 -> M
    //? Una Publicacion pertenece a un Usuario
    Posts.belongsTo(Users)

    //? //? Un Usuario tiene muchas publicaciones
    Users.hasMany(Posts)
    
    //* 1 -> M
    //? Una Publicacion pertenece a una categoria
    Posts.belongsTo(Categories)
    //? Una Categoria tiene muchas publicaciones
    Categories.hasMany(Posts)
}

module.exports = initModels
const productsDAL = require('../DALs/productsDAL')


const getAll = async() => {
    const products = await productsDAL.getAllProducts()
    return products
}

const getById = async(id)=>{
    const product = await productsDAL.getProductById(id)
    return product
}

const create = async(obj) => {
    const products = await productsDAL.createProduct(obj)
    return products
}

const update = async(id, obj) => {
    const products = await productsDAL.updateProduct(id, obj)
    return products
}

const remove = async(id) => {
    const products = await productsDAL.deleteProduct(id)
    return products
}

module.exports = {getAll, getById, create, update, remove}
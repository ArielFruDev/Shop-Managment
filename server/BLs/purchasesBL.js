const purchasesDAL = require('../DALs/purchasesDAL')
const productsBL = require('../BLs/productsBL')


const getAll = async() => {
    const purchases = await purchasesDAL.getAllPurchases()
    return purchases
}

const getById = async(id)=>{
    const purchase = await purchasesDAL.getPurchaseById(id)
    return purchase
}

const getByCustomerId = async(customerId) => {
    const purchases = await purchasesDAL.getByCustomerId(customerId)
    return purchases
}

const getByProductId = async(productId) => {
    const purchases = await purchasesDAL.getByProductId(productId)
    return purchases
}

const create = async(obj) => {
    const purchases = await purchasesDAL.createPurchase(obj)
    return purchases
}

const remove = async(id)=>{
    const purchases = await purchasesDAL.deletePurchase(id)
    return purchases
}

const removeByProductId = async(id) => {
    const purchases = await purchasesDAL.deleteByProductId(id)
    return purchases
}

const removeByCustomerId = async(id) => {
    const purchases = await purchasesDAL.deleteByCustomerId(id)
    return purchases
}

module.exports = {getAll, getById, getByCustomerId, getByProductId, create, remove, removeByProductId, removeByCustomerId}
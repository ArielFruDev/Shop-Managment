import axios from 'axios'
import { reduceQuantity } from './productsUtils'

const getAllPurchases = async() => {
    const resp = await axios.get('http://localhost:8000/purchases')
    const purchases = resp.data
    return purchases
}

const addPurchase = async(obj) => {
    const resp = await axios.post('http://localhost:8000/purchases', obj)
    const purchases = resp.data
    const products = await reduceQuantity(obj.productID)
    return {purchases: purchases, products: products}
}

const deleteByProductId = async(productId) => {
    const resp = await axios.delete(`http://localhost:8000/purchases/byProductId/${productId}`)
    const purchases = resp.data
    return purchases
}

const deleteByCustomerId = async(customerId) => {
    const resp = await axios.delete(`http://localhost:8000/purchases/byCustomerId/${customerId}`)
    const purchases = resp.data
    return purchases
}

export {getAllPurchases, addPurchase, deleteByProductId, deleteByCustomerId}
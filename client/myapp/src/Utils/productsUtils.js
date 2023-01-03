import axios from 'axios'

const getAllProducts = async() => {
    const resp = await axios.get('http://localhost:8000/products')
    const products = resp.data
    return products
}

const addNewProduct = async(obj) => {
    const resp = await axios.post('http://localhost:8000/products', obj)
    const products = resp.data
    return products
}

const updateExistProduct = async(id, obj) => {
    // console.log(id);
    // console.log(obj);
    const resp = await axios.put(`http://localhost:8000/products/${id}`, obj)
    const products = resp.data
    return products
}

const removeProduct = async(id) => {
    const resp = await axios.delete(`http://localhost:8000/products/${id}`)
    const products = resp.data
    return products
}

const reduceQuantity = async(id) => {
    const resp = await axios.get(`http://localhost:8000/products/${id}`)
    const product = resp.data
    const newProduct = {
        name: product.name,
        price: product.price,
        quantity: product.quantity -1
    }
    const updatedProductsList = await updateExistProduct(id, newProduct)
    return updatedProductsList
}

export {getAllProducts, addNewProduct, updateExistProduct, removeProduct, reduceQuantity}
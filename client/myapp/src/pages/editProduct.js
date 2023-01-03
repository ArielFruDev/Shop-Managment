import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Customer from './customer'
import { updateExistProduct, removeProduct } from '../Utils/productsUtils'
import { setAllProducts, setAllPurchases } from '../Redux/actions'
import { deleteByProductId } from '../Utils/purchasesUtils'

const EditProduct = () => {
  console.log('editProduct');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const {product} = location.state
  const customers = useSelector(state => state.purchases.filter(purchase => purchase.productID === product._id))

  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity)

  const customersIds = []
  const uniqeCustomersIds = customers.filter(customer => {
    const isDuplicate = customersIds.includes(customer.customerID);
    if (!isDuplicate) {
      customersIds.push(customer.customerID);
      return true;
    }
    return false;
  })

  const updateProduct = async() => {
    const newProduct = {
      _id: product._id,
      name: name,
      price: price,
      quantity: quantity
    }
    const newProductsList = await updateExistProduct(newProduct._id, newProduct)
    dispatch(setAllProducts(newProductsList))
    navigate('/products')
  }

  const deleteProduct = async() => {
    const newProductsList = await removeProduct(product._id)
    const newPurchasesList = await deleteByProductId(product._id)
    dispatch(setAllProducts(newProductsList))
    dispatch(setAllPurchases(newPurchasesList))
    navigate('/products')
  }

  return (
    <div>
        <input type="text"  value={name} onChange={(event) => {setName(event.target.value)}}/> <br />
        <input type="text"  value={price} onChange={(event) => {setPrice(event.target.value)}}/> <br />
        <input type="text"  value={quantity} onChange={(event) => {setQuantity(event.target.value)}}/> <br />
        <button onClick={updateProduct}>Update</button><br />
        <button onClick={deleteProduct}>Delete This Product</button><br />
        <button onClick={() => {navigate(-1)}}>Cancel</button>
        <h3>Customers who bought this product:</h3>
        {uniqeCustomersIds.map(customer => {
          return <Customer key={customer.customerID} customerID={customer.customerID}/>
        })}

        
        
    </div>
  )
}

export default EditProduct
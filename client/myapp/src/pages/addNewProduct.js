import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewProduct } from '../Utils/productsUtils'
import { setAllProducts } from '../Redux/actions'

const AddNewProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const products = useSelector(state => state.products)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

  const createNewProduct = async() => {
    const newProduct = {
      name: name,
      price: price,
      quantity: quantity
    }
    const newProductsList = await addNewProduct(newProduct)
    dispatch(setAllProducts(newProductsList))
    navigate('/products')
  }

  return (
    <div>
        <h1>Add New Product</h1>

        Name: <input type="text"  value={name} onChange={(event) => {setName(event.target.value)}}/> <br />
        Price: <input type="number"  value={price} onChange={(event) => {setPrice(event.target.value)}}/> <br />
        Quantity: <input type="number"  value={quantity} onChange={(event) => {setQuantity(event.target.value)}}/> <br />
        <button onClick={createNewProduct}>Create</button><br />
        <button onClick={() => {navigate(-1)}}>Cancel</button>

    </div>
  )
}

export default AddNewProduct
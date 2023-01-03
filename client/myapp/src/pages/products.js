import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Product from './product'

const Products = () => {

  const navigate = useNavigate()
  console.log('products');
    const totalAmountOfPurchasedItems = useSelector(state => state.purchases.length)
    const products = useSelector(state => state.products)
    
  return (
    <div >
        <h1>Products</h1>
        Items Purchased: <strong>{totalAmountOfPurchasedItems}</strong> <br /><br />

        <button onClick={() => {navigate('/products/addNewProduct')}}>Create New Product</button>

        {products.map((product, index) => {
            return <Product key={index} product={product}/>
        })}
    </div>
  )
}

export default Products
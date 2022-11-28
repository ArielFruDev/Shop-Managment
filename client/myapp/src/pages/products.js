import React from 'react'
import { useSelector } from 'react-redux'
import Product from './product'

const Products = () => {
  console.log('products');
    const totalAmountOfPurchasedItems = useSelector(state => state.purchases.length)
    const products = useSelector(state => state.products)
    
  return (
    <div >
        <h1>Products</h1>
        Items Purchased: <strong>{totalAmountOfPurchasedItems}</strong> <br />

        {products.map((product, index) => {
            return <Product key={index} product={product}/>
        })}
    </div>
  )
}

export default Products
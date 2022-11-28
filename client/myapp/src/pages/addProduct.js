import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsToAdd from './productsToAdd'

const AddProduct = ({customerId, customerPurchases}) => {
  console.log('addProduct');

    const products = useSelector(state => state.products)
    const [isAddButtonClicked, setIsAddButtonClicked] = useState(false)

  return (
    <div>
        <ol>
                {customerPurchases?.map((purchase, index) => {
                  const productName = products.find(product => product._id === purchase.productID).name
                  return <li key={index}>{productName}</li>
                })}
              </ol>
              <button onClick={() => {setIsAddButtonClicked(!isAddButtonClicked)}}>Add Product</button>
              {isAddButtonClicked && <ProductsToAdd customerID={customerId}/>}
    </div>
  )
}

export default AddProduct
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPurchase } from '../Utils/purchasesUtils'
import { setAllProducts, setAllPurchases } from '../Redux/actions'

const ProductsToAdd = ({customerID}) => {
    console.log('productsToAdd');
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const date = sessionStorage.getItem("date")
    const [selectedProduct, setSelectedProduct] = useState({
        customerID: customerID,
        productID: products[0]._id,
        date: date
    })

  return (
    <div style={{border: '3px solid orange'}}>
        Product: <select name="products" onChange={(event) => {setSelectedProduct(JSON.parse(event.target.value))}}>
            {products.map((product, index) => {
                const productDetails = {
                    customerID: customerID,
                    productID: product._id,
                    date: date
                }
                return <option key={index} value={JSON.stringify(productDetails)}>{product.name}</option>
            })}
        </select> <br />

        <button onClick={async() => {
            const resp = await addPurchase(selectedProduct)
            dispatch(setAllPurchases(resp.purchases))
            dispatch(setAllProducts(resp.products))
        }}>Save</button>
    </div>
  )
}

export default ProductsToAdd
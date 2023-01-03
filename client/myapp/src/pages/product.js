import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PurchaseCustomerDetails from './purchaseCustomerDetails'
const Product = ({product}) => {
  console.log('product');
    const purchases = useSelector(state => state.purchases.filter(purchase => purchase.productID === product._id))
  return (
    <div style={{border: '3px solid red', margin: '20px', padding: '7px'}}>
        Name: <Link to={'/products/editProduct'} state={{product: product}}>{product.name}</Link> <br />
        Price: {product.price} <br />
        Quantity: {product.quantity} <br />

        <div >
            {purchases.map((purchase, index) => {
                return <PurchaseCustomerDetails key={index} date={purchase.date} customerID ={purchase.customerID}/>
            })}
        </div>
    </div>
  )
}

export default Product
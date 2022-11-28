import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductsToAdd from './productsToAdd'

const PurchaseCustomerDetails = ({date, customerID}) => {
  console.log('PurchaseCustomerDetails');
    const customer = useSelector(state => state.customers.filter(customer => customer._id === customerID)[0])

    const [isAddButtonClicked, setIsAddButtonClicked] = useState(false)

  return (
    <div style={{border: '3px solid green'}}>
            <strong>Name:</strong> <Link to={'/products/editCustomer'} state={{customer: customer}}>{`${customer.firstName} ${customer.lastName}`}</Link><br />
            <strong>Date:</strong> {date} <br />
            <button onClick={() => {setIsAddButtonClicked(!isAddButtonClicked)}}>Add Product To This Customer</button> <br />
            {isAddButtonClicked && <ProductsToAdd customerID={customerID}/>}
    </div>
  )
}

export default PurchaseCustomerDetails


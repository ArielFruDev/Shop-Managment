import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Customer = ({customerID}) => {
  console.log('customer');
    const customer = useSelector(state => state.customers.filter(customer => customer._id === customerID)[0])
  return (
    <div>
        <Link to={'/products/editCustomer'} state={{customer: customer}}>{`${customer.firstName} ${customer.lastName}`}</Link>       
    </div>
  )
}

export default Customer
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import AddProduct from './addProduct'

const Customers = () => {
  console.log('Customers')
  const navigate = useNavigate()
  const customers = useSelector(state => state.customers)
  const purchases = useSelector(state => state.purchases)


  return (
    <div>
      <h1>Customers</h1> <br/><br/>
      <button onClick={() => {navigate('/customers/addNewCustomer')}}>Create New Customer</button> <br/> <br/>
      <table className='center' style={{border: '3px solid black'}}>
        <tr>
          <th>Name</th>
          <th>Products</th>
          <th>dates</th>
        </tr>
        {customers.map((customer, index) => {
          const customerPurchases = purchases.filter(purchase => purchase.customerID === customer._id)
          return <tr key={index} style={{border: '3px solid black'}}>
            <td style={{border: '3px solid black'}}><Link to={'/products/editCustomer'} state={{customer: customer}}>{`${customer.firstName} ${customer.lastName}`}</Link></td>
            <td style={{border: '3px solid black'}}>
              {/* {console.log(customer._id)} */}
              <AddProduct customerId={customer._id} customerPurchases={customerPurchases}/>
            </td>
            <td style={{border: '3px solid black'}}>
              <ol>
                {customerPurchases.map(({date}, index) => {
                  return <li key={index}>{date}</li>
                })}
              </ol>
            </td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default Customers
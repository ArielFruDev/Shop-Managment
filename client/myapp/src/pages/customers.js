import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddProduct from './addProduct'

const Customers = () => {
  console.log('Customers');
  const customers = useSelector(state => state.customers)
  const purchases = useSelector(state => state.purchases)


  return (
    <div>
      <table style={{border: '3px solid black'}}>
        <tr>
          <th>Name</th>
          <th>Products</th>
          <th>dates</th>
        </tr>
        {customers.map((customer, index) => {
          const customerPurchases = purchases.filter(purchase => purchase.customerID === customer._id)
          return <tr key={index} style={{border: '3px solid black'}}>
            <td style={{border: '3px solid black'}}>{`${customer.firstName} ${customer.lastName}`}</td>
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
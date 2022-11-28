import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const CustomerFilter = () => {
    console.log('custoerFilter');
    const customers = useSelector(state => state.customers)
    const purchases = useSelector(state => state.purchases)
    const products = useSelector(state => state.products)


    const [selectedCustomer, setSelectedCustomer] = useState(customers[0])

  return (
    <div>
        <select onChange={(e) => {setSelectedCustomer(customers.filter(c => c._id === e.target.value)[0])}}>
            {customers?.map((customer, index) => {
                return <option key={index} value={customer._id}>{`${customer.firstName} ${customer.lastName}`}</option>
            })}
        </select> <br />
         
        {purchases.filter(purchase => purchase.customerID === selectedCustomer._id).
        map((purchase, index) => {
            return <div key={index} style={{border: '3px solid blue'}}>
                Customer Name: {`${selectedCustomer.firstName} ${selectedCustomer.lastName}`} <br />
                Procuct Name: {products.filter(p => p._id === purchase.productID)[0].name} <br />
                Purchase Date: {purchase.date}
            </div>
        })}
    </div>
  )
}

export default CustomerFilter
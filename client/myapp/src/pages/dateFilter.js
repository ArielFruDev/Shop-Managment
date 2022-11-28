import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const DateFilter = () => {
  console.log('dateFilter');
    const customers = useSelector(state => state.customers)
    const purchases = useSelector(state => state.purchases)
    const products = useSelector(state => state.products)


    const [selectedDate, setSelectedDate] = useState(sessionStorage.getItem('date'))

  return (
    <div>
        <input type="text" value={selectedDate} onChange={(e) => {setSelectedDate(e.target.value)}}/> <br />

        {purchases.filter(purchase => purchase.date === selectedDate).
        map((purchase, index) => {
            return <div key={index} style={{border: '3px solid blue'}}>
                Customer Name: {customers.filter(c => c._id === purchase.customerID).map(c => `${c.firstName} ${c.lastName}`)} <br />
                Procuct Name: {products.filter(p => p._id === purchase.productID)[0].name} <br />
                Purchase Date: {selectedDate}
            </div>
        })}
    </div>
  )
}

export default DateFilter
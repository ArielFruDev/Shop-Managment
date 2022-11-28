import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import DateFilter from './dateFilter'
import ProductFilter from './productFilter'
import CustomerFilter from './customerFilter'
const Purchases = () => {
  console.log('purchases');
  const navigate = useNavigate() 
  const [filter, setFilter] = useState('Customer Name')
  let componentToRender;
  switch (filter) {
    case 'Customer Name':
      componentToRender = <CustomerFilter/>
      break;
    case 'Product Name':
      componentToRender = <ProductFilter/>
      break;
    case 'Date':
      componentToRender = <DateFilter/>
      break;
    default:
      break;
  }
  


  return (
    <div>
      Search by: <br />
      <input type="radio" name="filter" value="Customer Name" onClick={(e) => {setFilter(e.target.value)}}/> Customer Name <br />
      <input type="radio" name="filter" value="Product Name" onClick={(e) => {setFilter(e.target.value)}}/> Product Name <br />
      <input type="radio" name="filter" value="Date" onClick={(e) => {setFilter(e.target.value)}}/> Date <br />

      Please choose {filter}: <br /> <br />

      {componentToRender}

      {/* <Outlet />  */}

       

      
    </div>
  )
}

export default Purchases


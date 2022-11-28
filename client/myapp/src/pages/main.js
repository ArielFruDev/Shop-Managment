import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Main = () => {
  console.log('main');
    const navigate = useNavigate()

    const customerToEdit = {
      
    }
  return (
    <div>
        <nav>
            <button onClick={() => {navigate('/products')}}>Products</button> 
            <button onClick={() => {navigate('/customers')}}>Customers</button>
            <button onClick={() => {navigate('/purchases')}}>Purchases</button>
        </nav> <br /><br />

        <Outlet/>
    </div>
  )
}

export default Main
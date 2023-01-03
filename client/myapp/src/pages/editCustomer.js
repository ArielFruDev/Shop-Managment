import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateCustomer, deleteCustomer } from '../Utils/customersUtils'
import { setAllCustomers, setAllPurchases } from '../Redux/actions'
import { useDispatch } from 'react-redux'
import { deleteByCustomerId, deleteByProductId } from '../Utils/purchasesUtils'

const EditCustomer = () => {
  console.log('EditCustomer');
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const {customer} = location.state
    // const customers = useSelector(state => state.purchases.filter(purchase => purchase.productID === product._id))
    //   console.log(customers);
    const [firstName, setfirstName] = useState(customer.firstName)
    const [lastName, setLastName] = useState(customer.lastName)
    const [city, setCity] = useState(customer.city)

    const update = async() => {
      const newCustomer = {
        _id: customer._id,
        firstName: firstName,
        lastName: lastName,
        city: city
      }
      // console.log(customer._id);
      const newCustomersList = await updateCustomer(customer._id, newCustomer)
      // console.log(newCustomersList);
      dispatch(setAllCustomers(newCustomersList))
      navigate('/products')
    }

    const remove = async() => {
      const newCustomersList = await deleteCustomer(customer._id)
      const newPurchasesList = await deleteByCustomerId(customer._id)
      dispatch(setAllCustomers(newCustomersList))
      dispatch(setAllPurchases(newPurchasesList))
      navigate('/products')
    }
  
    
    return (
      <div>
          <input type="text"  value={firstName} onChange={(event) => {setfirstName(event.target.value)}}/> <br />
          <input type="text"  value={lastName} onChange={(event) => {setLastName(event.target.value)}}/> <br />
          <input type="text"  value={city} onChange={(event) => {setCity(event.target.value)}}/> <br />
          <button onClick={update}>Update</button><br />
          <button onClick={remove}>Delete This Customer</button><br />   
          <button onClick={() => {navigate(-1)}}>Cancel</button>     
      </div>
    )
  }

export default EditCustomer
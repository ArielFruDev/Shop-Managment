import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewCustomer } from '../Utils/customersUtils'
import { setAllCustomers } from '../Redux/actions'

const AddNewCustomer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const customers = useSelector(state => state.customers)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [city, setCity] = useState('')

  const createaNewCustomer = async() => {
    const newCustomer = {
      firstName: firstName,
      lastName: lastName,
      city: city
    }
    const newCustomersList = await createNewCustomer(newCustomer)
    dispatch(setAllCustomers(newCustomersList))
    navigate('/customers')
  }

  return (
    <div>
        <h1>Add New Customer</h1>

        FirstName: <input type="text"  value={firstName} onChange={(event) => {setFirstName(event.target.value)}}/> <br />
        LastName: <input type="text"  value={lastName} onChange={(event) => {setLastName(event.target.value)}}/> <br />
        City: <input type="text"  value={city} onChange={(event) => {setCity(event.target.value)}}/> <br />
        <button onClick={createaNewCustomer}>Create</button><br />
        <button onClick={() => {navigate(-1)}}>Cancel</button>

    </div>
  )
}

export default AddNewCustomer
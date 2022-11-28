import axios from 'axios'

const getAllCustomers = async() => {
    const resp = await axios.get('http://localhost:8000/customers')
    const customers = resp.data
    return customers
}

const updateCustomer = async(customerId, obj) => {
    // console.log(customerId);
    // console.log(obj);
    const resp = await axios.put(`http://localhost:8000/customers/${customerId}`, obj)
    const customers = resp.data
    console.log(customers);
    return customers
} 

const deleteCustomer = async(customerId) => {
    const resp = await axios.delete(`http://localhost:8000/customers/${customerId}`)
    const customers = resp.data
    return customers
}

export {getAllCustomers, updateCustomer, deleteCustomer}

//http://localhost:8000/customers/6366e35e15efda51ae0a8a7e
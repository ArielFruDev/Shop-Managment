const customersDAL = require('../DALs/customersDAL')


const getAll = async() => {
    const customers = await customersDAL.getAllCustomers()
    return customers
}

const getById = async(id)=>{
    const customer = await customersDAL.getCustomerById(id)
    return customer
}

const create = async(obj) => {
    const customers = await customersDAL.createCustomer(obj)
    return customers
}

const update = async(id, obj) => {
    const customers = await customersDAL.updateCustomer(id, obj)
    return customers
}

const remove = async(id)=>{
    const customers = await customersDAL.deleteCustomer(id)
    return customers
}

module.exports = {getAll, getById, create, update, remove}
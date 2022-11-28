const mongoose = require('mongoose')
const customersModel = require('../Models/customersModel')


const getAllCustomers = ()=>{
    return new Promise((resolve, reject) => {
        customersModel.find({}, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getCustomerById = (id)=> {
    return new Promise((resolve, reject)=>{
        customersModel.findById(id, (err,data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createCustomer = (obj)=> {
    return new Promise((resolve, reject)=>{
        let member = customersModel({
            firstName: obj.firstName,
            lastName: obj.lastName,
            city: obj.city
        })

        member.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(getAllCustomers())
            }
        })
    })
}

const updateCustomer = (id, obj) => {
    return new Promise((resolve, reject) => {
        customersModel.findByIdAndUpdate(id, obj, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllCustomers())
            }
        })
    })
}


const deleteCustomer = (id)=> {
    return new Promise((resolve, reject)=>{
        customersModel.findByIdAndDelete(id, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllCustomers())
            }
        })
    })
}


module.exports = {getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer}
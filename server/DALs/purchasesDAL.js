const mongoose = require('mongoose')
const purchasesModel = require('../Models/purchasesModel')


const getAllPurchases = ()=>{
    return new Promise((resolve, reject) => {
        purchasesModel.find({}, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getPurchaseById = (id)=> {
    return new Promise((resolve, reject)=>{
        purchasesModel.findById(id, (err,data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getByCustomerId = (customerId)=> {
    return new Promise((resolve, reject)=>{
        console.log(customerId);
        purchasesModel.find({customerID: customerId}, (err,data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getByProductId = (productId)=> {
    return new Promise((resolve, reject)=>{
        console.log('work');
        purchasesModel.find({productID: productId}, (err,data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createPurchase = (obj)=> {
    return new Promise((resolve, reject)=>{
        let member = purchasesModel({
            customerID: obj.customerID,
            productID: obj.productID,
            date: obj.date
        })

        member.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(getAllPurchases())
            }
        })
    })
}


const deletePurchase = (id)=> {
    return new Promise((resolve, reject)=>{
        purchasesModel.findByIdAndDelete(id, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllPurchases())
            }
        })
    })
}

const deleteByProductId = (id) => {
    return new Promise((resolve, reject) => {
        purchasesModel.deleteMany({productID: id}, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(getAllPurchases())
            }
        })
    })
}

const deleteByCustomerId = (id) => {
    return new Promise((resolve, reject) => {
        purchasesModel.deleteMany({customerID: id}, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(getAllPurchases())
            }
        })
    })
}


module.exports = {getAllPurchases, getPurchaseById, getByCustomerId, getByProductId, createPurchase,
     deletePurchase, deleteByProductId, deleteByCustomerId}
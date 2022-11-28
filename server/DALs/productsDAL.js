const mongoose = require('mongoose')
const productsModel = require('../Models/productsModel')


const getAllProducts = ()=>{
    return new Promise((resolve, reject) => {
        productsModel.find({}, (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getProductById = (id)=> {
    return new Promise((resolve, reject)=>{
        productsModel.findById(id, (err,data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createProduct = (obj)=> {
    return new Promise((resolve, reject)=>{
        let member = productsModel({
            name: obj.name,
            price: obj.price,
            quantity: obj.quantity
        })

        member.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(getAllProducts())
            }
        })
    })
}

const updateProduct = (id, obj) => {
    return new Promise((resolve, reject) => {
        productsModel.findByIdAndUpdate(id, obj, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllProducts())
            }
        })
    })
}


const deleteProduct = (id)=> {
    return new Promise((resolve, reject)=>{
        productsModel.findByIdAndDelete(id, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve(getAllProducts())
            }
        })
    })
}

module.exports = {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct}
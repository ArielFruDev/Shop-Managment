const express = require('express')
const productsBL = require('../BLs/productsBL')

const router = express.Router()


router.get('/', async(req, resp)=>{
    const products = await productsBL.getAll()
    return resp.json(products)
})

router.get('/:id', async(req, resp)=>{
    const id = req.params.id
    const products = await productsBL.getById(id)
    return resp.json(products)
})

router.post('/', async(req, resp) => {
    const obj = req.body
    const products = await productsBL.create(obj)
    return resp.json(products)
})

router.put('/:id', async(req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const products = await productsBL.update(id, obj)
    resp.json(products)
})
router.delete('/:id', async(req, resp)=>{
    const id = req.params.id
    const products = await productsBL.remove(id)
    return resp.json(products)
})






module.exports = router
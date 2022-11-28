const express = require('express')
const purchasesBL = require('../BLs/purchasesBL')

const router = express.Router()


router.get('/', async(req, resp)=>{
    const purchases = await purchasesBL.getAll()
    return resp.json(purchases)
})

router.get('/:id', async(req, resp)=>{
    const id = req.params.id
    const purchases = await purchasesBL.getById(id)
    return resp.json(purchases)
})

router.get('/byCustomer/:id', async(req, resp)=>{
    const id = req.params.id
    const purchases = await purchasesBL.getByCustomerId(id)
    return resp.json(purchases)
})

router.get('/byProduct/:id', async(req, resp)=>{
    const id = req.params.id
    const purchases = await purchasesBL.getByProductId(id)
    return resp.json(purchases)
})

router.post('/', async(req, resp) => {
    const obj = req.body
    const purchases = await purchasesBL.create(obj)
    return resp.json(purchases)
})

router.put('/:id', async(req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const purchases = await purchasesBL.update(id, obj)
    resp.json(purchases)
})
router.delete('/byId/:id', async(req, resp)=>{
    const id = req.params.id
    const purchases = await purchasesBL.remove(id)
    return resp.json(purchases)
})
router.delete('/byProductId/:id', async(req, resp)=>{
    const id = req.params.id
    const purchases = await purchasesBL.removeByProductId(id)
    return resp.json(purchases)
})
router.delete('/byCustomerId/:id', async(req, resp)=>{
    const id = req.params.id
    const purchases = await purchasesBL.removeByCustomerId(id)
    return resp.json(purchases)
})


module.exports = router
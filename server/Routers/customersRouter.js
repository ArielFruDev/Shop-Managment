const express = require('express')
const customersBL = require('../BLs/customersBL')

const router = express.Router()


router.get('/', async(req, resp)=>{
    const customers = await customersBL.getAll()
    return resp.json(customers)
})

router.get('/:id', async(req, resp)=>{
    const id = req.params.id
    const customers = await customersBL.getById(id)
    return resp.json(customers)
})

router.post('/', async(req, resp) => {
    const obj = req.body
    const customers = await customersBL.create(obj)
    return resp.json(customers)
})

router.put('/:id', async(req, resp)=>{
    const id = req.params.id
    const obj = req.body
    const customers = await customersBL.update(id, obj)
    return resp.json(customers)
})
router.delete('/:id', async(req, resp)=>{
    const id = req.params.id
    const customers = await customersBL.remove(id)
    return resp.json(customers)
})






module.exports = router
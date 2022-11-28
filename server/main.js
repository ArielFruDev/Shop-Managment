const express = require('express')
const cors = require('cors')
const customersRouter = require('./Routers/customersRouter')
const productsRouter = require('./Routers/productsRouter')
const purchasesRouter = require('./Routers/purchasesRouter')



let app = express()

app.use(cors())
app.use(express.json())

require('./Configs/storeDB')
app.use("/customers", customersRouter)
app.use("/products", productsRouter)
app.use("/purchases", purchasesRouter)


app.listen(8000, (req, resp) => {
    console.log("server 8000 is listening");
})
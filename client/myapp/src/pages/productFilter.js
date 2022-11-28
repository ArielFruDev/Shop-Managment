import React, { useState } from 'react'
import { useSelector } from 'react-redux'



const ProductFilter = () => {
  console.log('productFilter');
  const customers = useSelector(state => state.customers)
  const purchases = useSelector(state => state.purchases)
  const products = useSelector(state => state.products)


  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <div>
      <select onChange={(e) => {setSelectedProduct(products.filter(p => p._id === e.target.value)[0])}}>
            {products?.map((product, index) => {
                return <option key={index} value={product._id}>{`${product.name}`}</option>
            })}
        </select> <br /> <br />

        {purchases.filter(purchase => purchase.productID === selectedProduct._id).
        map((purchase, index) => {
            return <div key={index} style={{border: '3px solid blue'}}>
                Customer Name: {customers.filter(c => c._id === purchase.customerID).map(c => `${c.firstName} ${c.lastName}`)} <br />
                Product Name: {selectedProduct.name} <br />
                Purchase Date: {purchase.date}
            </div>
        })}
    </div>
  )
}

export default ProductFilter
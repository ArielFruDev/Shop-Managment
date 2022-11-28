import { useSelector } from "react-redux";

import React from 'react'

const SelectorTester = () => {
    const products = useSelector(state => state.products)
    console.log(products);
    const purchases = useSelector(state => state.purchases)
    console.log(purchases);
    const customers = useSelector(state => state.customers)
    console.log(customers);
  return (
    <div>SelectorTester</div>
  )
}

export default SelectorTester

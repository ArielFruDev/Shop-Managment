const setAllProducts = (products) => {
    const action = {
        type: 'ADD_PRODUCTS',
        payload: products
    }
    return action
}

const setAllCustomers = (customers) => {
    const action = {
        type: 'ADD_CUSTOMERS',
        payload: customers
    }
    return action
}

const setAllPurchases = (purchases) => {
    const action = {
        type: 'ADD_PURCHASES',
        payload: purchases
    }
    return action
}

export {setAllProducts, setAllCustomers, setAllPurchases} 
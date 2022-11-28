const initialState = {
    products: [],
    customers: [],
    purchases: []
}

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {...state, products: [...action.payload]}
    case 'ADD_CUSTOMERS':
      return {...state, customers: [...action.payload]}
    case 'ADD_PURCHASES':
      return {...state, purchases: [...action.payload]}
    default:
        return state;
  }
}

export default RootReducer
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { setAllProducts, setAllCustomers, setAllPurchases } from './Redux/actions';
import { getAllCustomers } from './Utils/customersUtils';
import { getAllProducts } from './Utils/productsUtils';
import { getAllPurchases } from './Utils/purchasesUtils';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Products from './pages/products';
import Purchases from './pages/purchases';
import Customers from './pages/customers';
import EditProduct from './pages/editProduct';
import EditCustomer from './pages/editCustomer';
import SelectorTester from './pages/selectorTester';
import DateFilter from './pages/dateFilter';
import ProductFilter from './pages/productFilter';
import CustomerFilter from './pages/customerFilter';
import AddNewProduct from './pages/addNewProduct';
import AddNewCustomer from './pages/addNewCustomer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCustomers = async() => {
      const customers = await getAllCustomers()
      dispatch(setAllCustomers(customers))
    }
    getCustomers()
    const getProducts = async() => {
      const products = await getAllProducts()
      dispatch(setAllProducts(products))
    }
    getProducts()
    const getPurchases = async() => {
      const purchases = await getAllPurchases()
      dispatch(setAllPurchases(purchases))
    }
    getPurchases()

    const setDate = () => {
      const date = new Date()
      const set2Digits = (num) => {return num.toString().padStart(2, '0')}
      const currentDate = `${set2Digits(date.getDate())}/${set2Digits(date.getMonth() + 1)}/${date.getFullYear()}`
      sessionStorage.setItem("date", currentDate)
    }
    setDate()
  },[])

  return (
    <div className="App">
      <h1>Product Store</h1>        
        <Routes>
        <Route path='/' element={<Main />} >
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/purchases' element={<Purchases/>}>
            <Route path='/purchases/productFilter' element={<ProductFilter/>}/>
            <Route path='/purchases/customerFilter' element={<CustomerFilter/>}/>
            <Route path='/purchases/dateFilter' element={<DateFilter/>}/>
          </Route>
        </Route>
        <Route path='/products/addNewProduct' element={<AddNewProduct/>}/>
        <Route path='/customers/addNewCustomer' element={<AddNewCustomer/>}/>
        <Route path='/products/editProduct' element={<EditProduct/>}/>
        <Route path='/products/editCustomer' element={<EditCustomer/>}/>
        </Routes>
    </div>
  );
}


export default App;

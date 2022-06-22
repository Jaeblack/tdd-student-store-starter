import * as React from "react"
import { Routes, Route, Link, useParams} from 'react-router-dom'
import { useState , useEffect} from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Error from "../Home/Error"
import ProductDetail from "../Product/ProductDetail"
import "./App.css"

import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import NotFound from "../Home/NotFound"

const URL = 'https://codepath-store-api.herokuapp.com/store'
let exCart = [
  {itemId : 0, name: 'Rice Krispies', quantity: 2, unit_price: 0.54},
  {itemId : 1, name: 'Cheetos', quantity: 3, unit_price: 1.20},
  {itemId : 2, name: 'Cookies', quantity: 5, unit_price: 0.01},
]

export default function App() {


  const [shoppingCart, setShoppingCart] = useState(exCart);
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // const response = await fetch(URL)
      // const result = await response.json()
      // setProducts(result.products)
      setIsFetching(true);
      axios.get(URL).then(response => {
        setIsFetching(false);
        setProducts(response.data.products);
        setError(null);

      }).catch( err => {
        setIsFetching(false);
        setError(err);
        console.log('uh uh', err)
      })


    }

    fetchData();
  }, [])


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          {error && <Error error={error}/>}
          <Routes>
            <Route path="/" element={<Home products={products}/>} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Sidebar shoppingCart={shoppingCart} isOpen={isOpen}/>
        </main>
      </BrowserRouter>
    </div>
  )
}

import * as React from "react"
import { Routes, Route, Link, useParams} from 'react-router-dom'
import { useState , useEffect} from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Product from "../Product/Product"
import "./App.css"

import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

const URL = 'https://codepath-store-api.herokuapp.com/store'
let exCart = [
  {name: 'Rice Krispies', quantity: 2, unit_price: 0.54},
  {name: 'Cheetos', quantity: 3, unit_price: 1.20},
  {name: 'Cookies', quantity: 5, unit_price: 0.01},
]

export default function App() {


  const [cart, setCart] = useState(exCart);
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      // const response = await fetch(URL)
      // const result = await response.json()
      // setProducts(result.products)

      const { data } = await axios(URL)
      setProducts(data.products)
    }

    fetchData();
  }, [])


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Routes>
            <Route path="*" element={<Home products={products}/>} />
          </Routes>
          <Sidebar cart={cart}/>
        </main>
      </BrowserRouter>
    </div>
  )
}

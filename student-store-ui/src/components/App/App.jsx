import * as React from "react"
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
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
  { id: 3, quantity: 3 },
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
  { id: 4, quantity: 0 },
]
let errorEmpty = { message: "There ar not products " }

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
        if (response.data.products.length === 0) {
          setError(errorEmpty);
          setProducts([]);
        } else {
          setProducts(response.data.products);
          setError(null);
        }


      }).catch(err => {
        setIsFetching(false);
        setError(err);
        console.log('uh uh', err)
      })


    }

    fetchData();
  }, [])


  function handleOnToggle() {
    setIsOpen((previous) => (!previous));
  }

  function handleAddItemToCart(productId) {
    let newShopCart = [...shoppingCart];
    let prodIndx = newShopCart.findIndex(prod => {
      return prod.id === productId;
    });

    if (prodIndx === -1) {
      let newItem = {id: productId, quantity: 1};
      newShopCart.push(newItem);
    } else {
      newShopCart[prodIndx].quantity += 1;
    }
    setShoppingCart(newShopCart);
  }

  function handleRemoveItemFromCart(productId) {
    let newShopCart = [...shoppingCart];
    let prodIndx = newShopCart.findIndex(prod => {
      return prod.id === productId;
    });

    if (prodIndx != -1) {

      if(newShopCart[prodIndx].quantity === 0){
        newShopCart = newShopCart.filter(prod => prod.quantity !=0);
      } else {
        newShopCart[prodIndx].quantity -= 1;
      }
    }
    setShoppingCart(newShopCart);
  }

  function handleOnCheckoutFormChange() {

  }

  function handleOnSubmitCheckoutForm() {

  }




  return (
    <div className="app">
      <BrowserRouter>
        <div className="container">
          <Sidebar products={products} shoppingCart={shoppingCart} isOpen={isOpen} handleOnToggle={handleOnToggle} />
          <main className="wrapper">
            <div >
              {/* YOUR CODE HERE! */}
              <Navbar />
              <div className="main">
                {error && <Error error={error} />}
                <Routes>
                  <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
                  <Route path="products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>


          </main>
        </div>
      </BrowserRouter>
    </div >
  )
}

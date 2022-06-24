import * as React from "react"
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Error from "../Error/Error"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"

import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import NotFound from "../NotFound/NotFound"

const URL = 'https://codepath-store-api.herokuapp.com/store'
let exCart = [
  { itemId: 3, quantity: 1 },
  { itemId: 1, quantity: 1 },
  { itemId: 2, quantity: 1 }
]
let errorEmpty = { message: "There are not products " }

export default function App() {


  const [shoppingCart, setShoppingCart] = useState(exCart);
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [checkoutForm, setCheckoutForm] = useState({email:'', name:''});
  const [category, setCategory] = useState({category:'*', word:''});


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
      return prod.itemId === productId;
    });

    if (prodIndx === -1) {
      let newItem = {itemId: productId, quantity: 1};
      newShopCart.push(newItem);
    } else {
      newShopCart[prodIndx].quantity += 1;
    }
    setShoppingCart(newShopCart);
  }

  function handleRemoveItemFromCart(productId) {
    let newShopCart = [...shoppingCart];
    let prodIndx = newShopCart.findIndex(prod => {
      return prod.itemId === productId;
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

  function handleOnCheckoutFormChange(name, value) {
    console.log(name,value);
    let newCheck = {...checkoutForm};
    newCheck[name] = value;
    setCheckoutForm(newCheck);
    console.log(checkoutForm);
  }

  function handleOnSubmitCheckoutForm(event) {
    event.preventDefault();
    let params = {
      user : {...checkoutForm},
      shoppingCart : [...shoppingCart]
    }
    console.log('about to send', params);
    axios.post(URL, params).then(response => {
      console.log('post got', response);
      setSuccess(true);
      setShoppingCart([]);
      setCheckoutForm({email:'', name:''});
    }).catch( err => {
      setError(err);
      setSuccess(false);
        console.log('uh uh', err)
    })
  }




  return (
    <div className="app">
      <BrowserRouter>
        <div className="container">
          <Sidebar products={products} shoppingCart={shoppingCart} isOpen={isOpen} checkoutForm={checkoutForm} success={success} handleOnToggle={handleOnToggle} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} />
          <main className="wrapper">
            <div >
              {/* YOUR CODE HERE! */}
              <Navbar />
              <div className="main">
                {error && <Error error={error} />}

                <Routes>
                  <Route path="/" element={<Home products={products} shoppingCart={shoppingCart} category={category} setCategory={setCategory} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
                  <Route path="products/:productId" element={<ProductDetail shoppingCart={shoppingCart} category={category} setCategory={setCategory}  handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
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

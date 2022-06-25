import * as React from "react"
import { useState, useEffect } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar({ products, shoppingCart, isOpen, checkoutForm, success, receipt, setReceipt , handleOnToggle, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm }) {



  return (
    <section className={isOpen? "sidebar open" : "sidebar"} >
      <button id="toggle" className="toggle-button" onClick={handleOnToggle}> toggle </button>
      <ShoppingCart products={products} shoppingCart={shoppingCart} isOpen={isOpen} />
      <CheckoutForm isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm} success={success} receipt={receipt} setReceipt={setReceipt} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} />
      <div className="receipt">
        {
          receipt &&
          receipt.lines.map(line => {
            return <p key={line} >{line}</p>
          })
        }
      </div>
    </section>
  )
}

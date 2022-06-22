import * as React from "react"
import CheckoutForm from "./CheckoutForm"
import "./Sidebar.css"

export default function Sidebar({ shoppingCart, isOpen }) {

  return (
    <section className={isOpen ? "sidebar" : "sidebar closed"} >
      <p>Sidebar</p>
      <div>
        <p>item.itemId : item.name - item.quantity - item.unit_price . item.unit_price*item.quantity</p>
      </div>
      {shoppingCart.map(item => {
        //console.log('iteeeem', item)
        return (
          <div className="added-item" key={item.itemId}>
            <p>{item.itemId}</p>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.unit_price.toFixed(2)}</p>
            <p>{(item.unit_price * item.quantity).toFixed(2)}</p>
          </div>
        )
      })}
      {
        <div className="totals">
          <p>Subtotal : </p> <p className='values'>{shoppingCart.reduce((prev, curr) => prev + (curr.unit_price * curr.quantity), 0).toFixed(2)}</p>
          <p>Taxes : </p> <p className='values' >{(0.16 * shoppingCart.reduce((prev, curr) => prev + (curr.unit_price * curr.quantity), 0)).toFixed(2)}</p>
          <p>Total : </p> <p className='values' >{1.16 * (shoppingCart.reduce((prev, curr) => prev + (curr.unit_price * curr.quantity), 0)).toFixed(2)}</p>
        </div>
      }
      <CheckoutForm />
    </section>
  )
}

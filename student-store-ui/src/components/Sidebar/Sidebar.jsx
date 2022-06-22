import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({cart}) {

  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <div>
      <p>item.name - item.quantity - item.unit_price . item.unit_price*item.quantity</p>
      </div>
      {cart.map(item => {
        console.log('iteeeem', item)
        return (
          <div className="added-item" key={item.name}>
            <p>{item.name} - {item.quantity} - {item.unit_price}. {item.unit_price*item.quantity}</p>
          </div>
        )
      })}
    </section>
  )
}

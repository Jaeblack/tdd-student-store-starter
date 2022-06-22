import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({shoppingCart, isOpen}) {

  return (
    <section className={isOpen? "sidebar" : "sidebar closed"} >
      <p>Sidebar</p>
      <div>
      <p>item.itemId : item.name - item.quantity - item.unit_price . item.unit_price*item.quantity</p>
      </div>
      {shoppingCart.map(item => {
        //console.log('iteeeem', item)
        return (
          <div className="added-item" key={item.itemId}>
            <p>{item.itemId} : {item.name} - {item.quantity} - {item.unit_price}. {item.unit_price*item.quantity}</p>
          </div>
        )
      })}
    </section>
  )
}

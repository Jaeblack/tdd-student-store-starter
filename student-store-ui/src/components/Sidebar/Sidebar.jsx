import * as React from "react"
import { useState, useEffect} from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Sidebar.css"

export default function Sidebar({ products, shoppingCart, isOpen, handleOnToggle, handleOnCheckoutFormChange , handleOnSubmitCheckoutForm}) {

  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(()=>{
    //console.log(shoppingCart)
    //console.log(products)
    let items = []
    shoppingCart.map((prod =>{
      //console.log('prodi,' , prod)
        if(prod.quantity != 0 && products){
          let product = products.find((p) => p.id === prod.id);
          if(product){
            let newItem = {...product, quantity : prod.quantity};
            items.push(newItem);
          }
        }
    }));
    //console.log('chopitems,', items);
    setShoppingItems(items);
  },[shoppingCart,products])

  return (
    <div className="side-bar">
      <button id="toggle" className="toggle" onClick={handleOnToggle}> toggle </button>
      <section className={isOpen ? "sidebar" : "sidebar closed"} >
        <p>Sidebar</p>
        <div className="titles">
          <p>Name</p>
          <p className="center">Quantity</p>
          <p className="center">Unit Price</p>
          <p className="center">Cost</p>
        </div>
        {shoppingItems.map(item => {
          //console.log('iteeeem', item)
          return (
            <div className="added-item" key={item.id}>
              <p>{item.name}</p>
              <p className="number">{item.quantity}</p>
              <p className="number">{item.price.toFixed(2)}</p>
              <p className="number">{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          )
        })}
        {
          <div className="totals">
            <p>Subtotal : </p> <p className='number'>{shoppingItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0).toFixed(2)}</p>
            <p>Taxes : </p> <p className='number' >{(0.0875* shoppingItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)).toFixed(2)}</p>
            <p>Total : </p> <p className='number' >{(1.0875 * shoppingItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)).toFixed(2)}</p>
          </div>
        }
        <CheckoutForm handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} />
      </section>
    </div>
  )
}

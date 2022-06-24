import './ShoppingCart.css'
import { useState, useEffect } from 'react';

export default function ShoppingCart({ products, shoppingCart, isOpen }) {

    const [shoppingItems, setShoppingItems] = useState([]);

    useEffect(() => {
        //console.log(shoppingCart)
        //console.log(products)
        let items = []
        shoppingCart.map((prod => {
            //console.log('prodi,' , prod)
            if (prod.quantity != 0 && products) {
                let product = products.find((p) => p.id === prod.itemId);
                if (product) {
                    let newItem = { ...product, quantity: prod.quantity };
                    items.push(newItem);
                }
            }
        }));
        //console.log('chopitems,', items);
        setShoppingItems(items);
    }, [shoppingCart, products])

    return (
        <div className={isOpen ? "shopping-cart" : "shopping-cart closed"}>
            <h1>Shopping Cart</h1>
            {shoppingItems.length !== 0 ?
                <>
                    <div className="titles">
                        <p className="">Name</p>
                        <p className="center">Quantity</p>
                        <p className="center">Unit Price</p>
                        <p className="center">Cost</p>
                    </div>
                    {shoppingItems.map(item => {
                        //console.log('iteeeem', item)
                        return (
                            <div className="added-item" key={item.id}>
                                <p className="cart-product-name">{item.name}</p>
                                <p className="number">{item.quantity}</p>
                                <p className="number">{item.price.toFixed(2)}</p>
                                <p className="cart-product-quantity number ">{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        )
                    })}
                    {
                        <div className="totals">
                            <p>Subtotal : </p> <p className='subtotal number'>{shoppingItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0).toFixed(2)}</p>
                            <p>Taxes : </p> <p className='number' >{(0.0875 * shoppingItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)).toFixed(2)}</p>
                            <p>Total : </p> <p className='total-price number' >{(1.0875 * shoppingItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)).toFixed(2)}</p>
                        </div>
                    }
                </>
                :
                <>
                    <h2 className="notification center">No items added to cart yet. Start shopping now!</h2>
                </>
            }
        </div>
    );
}

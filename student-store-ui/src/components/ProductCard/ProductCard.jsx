

import { Routes, Route, Link, useParams } from 'react-router-dom'
import "./ProductCard.css"

export default function ProductCard({ product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription = false }) {
    //console.log("prooo", product)
    return (
        < div id="product-card" className="product-card">
            <div className="product-info">
                <div className="media">
                    <Link to={`/products/${productId}`}>
                        <img src={product.image} alt={product.name} className="product-image" />
                    </Link>
                </div>

                <p className="product-name" >{product.name}</p>
                <p className="product-price" >${(product.price).toFixed(2)}</p>
                <p className={showDescription ? "product-description" : "product-description closed"}>{product.description}</p>
            </div>
            <div className="product-actions">
                <button className="add" onClick={() => handleAddItemToCart(productId)}>+</button>
                <button className="remove" onClick={() => handleRemoveItemFromCart(productId)} >-</button>
                <div className={quantity === 0 ? "product-quantity closed" : "product-quantity"} >{quantity}</div>
            </div>

        </div >
    )
}

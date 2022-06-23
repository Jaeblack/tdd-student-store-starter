import { Routes, Route, Link, useParams } from 'react-router-dom'


export default function ProductCard({ product, handleAddItemToCart}) {
    //console.log("prooo", product)
    return (
        < div id="product-card" className="product-card">
            <div className="product-left">
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-image" />
            </Link>

            <p>{product.name}</p>
            <p>${product.price}</p>
            </div>
            <div className="product-right">
                <button className="btn-add" onClick={()=>handleAddItemToCart(product.id)}>+</button>
                <button className="btn-sus">-</button>
            </div>

        </div >
    )
}

import ProductCard from "../ProductCard/ProductCard";

export default function ProductView ({product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart}){
    return (
        <div className="product-view">
            <h1 className="product-id" >Product #{productId}</h1>
            <ProductCard key={productId} product={product} productId={productId} quantity={quantity} showDescription={true} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
        </div>
    )
}

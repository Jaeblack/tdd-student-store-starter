import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";


export default function ProductsGrid({ products, shoppingCart, handleAddItemToCart, handleRemoveItemFromCart }) {
    //console.log("prrrosss", products)
    return (
        <><h1>ProductsGrid</h1>
            < div id="product-grid" className="product-grid">

                {products &&
                    products.map(product => {
                        let prodIndx= (shoppingCart.findIndex(prod => prod.id === product.id));
                        let quantity = prodIndx === -1 ? 0 : shoppingCart[prodIndx].quantity;
                        return <ProductCard key={product.id} product={product} productId={product.id} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
                    })
                }
            </div >
        </>
    )
}

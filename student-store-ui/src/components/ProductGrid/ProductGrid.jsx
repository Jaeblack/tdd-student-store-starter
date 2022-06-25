import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";


export default function ProductsGrid({ products, shoppingCart, category, handleAddItemToCart, handleRemoveItemFromCart }) {
    //console.log("prrrosss", products)
    return (
        <><h1>ProductsGrid</h1>
            < div id="product-grid" className="product-grid">

                {products != null && /// check truthy values

                    products.filter(product => {
                        return (product.category.toLowerCase() === category.category.toLowerCase() || category.category === '*')
                    })
                        .filter(product => {
                            return (product.name.toLowerCase().includes(category.word.toLowerCase()) || category.word === '')
                        })
                        .map(product => {
                            let prodIndx = (shoppingCart.findIndex(prod => prod.itemId === product.id));
                            let quantity = prodIndx === -1 ? 0 : shoppingCart[prodIndx].quantity;
                            return <ProductCard key={product.id} product={product} productId={product.id} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
                        })
                }
            </div >
        </>
    )
}

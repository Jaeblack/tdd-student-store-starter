import "./Product.css";
import ProductCard from "./ProductCard";


export default function ProductsGrid({ products, handleAddItemToCart }) {
    //console.log("prrrosss", products)
    return (
        <><h1>ProductsGrid</h1>
            < div id="products-grid" className="products-grid">

                {products &&
                    products.map(product => {
                        return <ProductCard product={product} key={product.id} handleAddItemToCart={handleAddItemToCart}/>
                    })
                }
            </div >
        </>
    )
}

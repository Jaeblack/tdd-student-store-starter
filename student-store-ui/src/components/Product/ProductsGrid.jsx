import "./Product.css";


export default function ProductsGrid ({products}){
    return (
        < div id="products-grid" className="products-grid">
            <h1>ProductsGrid</h1>
            {products &&
                products.map(product =>{
                    return (
                        <div className="product-card" key={product.id}>
                            <p>{product.name}</p>
                        </div>
                    )
                })
            }
        </div >
        )
}

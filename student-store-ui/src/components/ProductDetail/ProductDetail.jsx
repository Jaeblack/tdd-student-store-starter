import { Routes, Route, Link, useParams } from 'react-router-dom'
import Search from '../Search/Search';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import ProductView from '../ProductView/ProductView';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./ProductDetail.css"
import NotFound from '../NotFound/NotFound';

const URL = 'http://localhost:3001/store'
//const URL = 'https://codepath-store-api.herokuapp.com/store'

export default function Product({ shoppingCart, category, setCategory, handleAddItemToCart, handleRemoveItemFromCart }) {
    const params = useParams()

    const [product, setProduct] = useState({id:1});
    const [isFound, setIsFound] = useState(0); // 0-loading, 1-found, 2- not found
    const [productId, setProductId] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        axios.get((URL + `/${params.productId}`))
            .then((response) => {
                //console.log('respons', response);
                let respProd = response.data.product
                setProduct(respProd);
                setIsFound(1);

                setProductId(respProd.id);
                let prodIndx = (shoppingCart.findIndex(prod => prod.itemId === respProd.id));
                let quant = prodIndx === -1 ? 0 : shoppingCart[prodIndx].quantity;
                setQuantity(quant);
            }).catch(err => {
                console.log('err', err);
                setIsFound(2);
            });
    }, []);

    useEffect(() => {
        let prodIndx = (shoppingCart.findIndex(prod => prod.itemId === productId));
        let quant = prodIndx === -1 ? 0 : shoppingCart[prodIndx].quantity;
        setQuantity(quant);
    }, [shoppingCart]);


    return (
        < div className="product-detail">
            <Hero />
            <Search category={category} setCategory={setCategory} />
            {
                isFound === 0 ?
                    <h1 className="loading">Loading...</h1> // 0 - loading
                    : isFound === 1 ? // 1 - found
                        <ProductView product={product} productId={productId} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
                        : // 2 - not found
                        <NotFound />


            }

            <About />
            <Contact />
            <Footer />
        </div >
    )
}

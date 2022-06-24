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

const URL = 'https://codepath-store-api.herokuapp.com/store'

export default function Product({ shoppingCart, handleAddItemToCart, handleRemoveItemFromCart }) {
    const params = useParams()

    const [product, setProduct] = useState({});
    const [isFound, setIsFound] = useState(0); // 0-loading, 1-found, 2- not found
    const [productId, setProductId] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        axios.get((URL + `/${params.productId}`))
            .then((response) => {
                console.log('respons', response);
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


    return (
        < div className="product-detail">
            <Hero />
            <Search />
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

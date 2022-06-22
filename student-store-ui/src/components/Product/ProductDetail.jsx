import { Routes, Route, Link, useParams } from 'react-router-dom'
import Banner from '../Banner/Banner';
import Search from './Search';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function Product() {
    const params = useParams()


    return (
    < div id="product">
        <Banner/>
        <Search/>
        <h1>Product - {params.productId}</h1>
        <About/>
        <Contact/>
        <Footer/>
    </div >
    )
}

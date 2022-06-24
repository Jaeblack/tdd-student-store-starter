import { Routes, Route, Link, useParams } from 'react-router-dom'
import Search from '../Search/Search';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';

export default function Product() {
    const params = useParams()


    return (
    < div id="product">
        <Hero />
        <Search/>
        <h1>Product - {params.productId}</h1>
        <About/>
        <Contact/>
        <Footer/>
    </div >
    )
}

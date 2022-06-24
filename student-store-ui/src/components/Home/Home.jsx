import * as React from "react"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./Home.css"
import Search from "../Search/Search"
import ProductsGrid from "../ProductGrid/ProductGrid"
import { Routes, Route, Link, useParams } from 'react-router-dom'
import Sidebar from "../Sidebar/Sidebar"
import Hero from "../Hero/Hero"

export default function Home({products, shoppingCart, handleAddItemToCart, handleRemoveItemFromCart}) {
  return (
    <div className="home">
      <Hero/>
      <Search/>
      <ProductsGrid products={products} shoppingCart={shoppingCart} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

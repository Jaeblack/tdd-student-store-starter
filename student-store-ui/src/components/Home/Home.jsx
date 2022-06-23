import * as React from "react"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./Home.css"
import Search from "../Product/Search"
import ProductsGrid from "../Product/ProductsGrid"
import { Routes, Route, Link, useParams } from 'react-router-dom'
import Sidebar from "../Sidebar/Sidebar"
import Hero from "../Hero/Hero"

export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart}) {
  return (
    <div className="home">
      <Hero/>
      <Search/>
      <ProductsGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

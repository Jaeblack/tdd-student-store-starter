import * as React from "react"
import "./Navbar.css"
import { Routes, Route, Link, useParams } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/#about">About Us</Link>
        <Link to="/#contact">Contact us</Link>
        <Link to="/product/5555">Buy now</Link>
    </nav>
  )
}

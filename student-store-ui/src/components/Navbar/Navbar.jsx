import * as React from "react"
import "./Navbar.css"
import { Routes, Route, Link, useParams } from 'react-router-dom'
import Logo from "./Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/"><Logo /> </Link>
        <Link className="nav-item" to="/#about">About Us</Link>
        <Link className="nav-item" to="/#contact">Contact us</Link>
        <Link className="nav-item" to="/#products-grid">Buy now</Link>
    </nav>
  )
}

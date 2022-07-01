import * as React from "react"
import "./Navbar.css"
import { HashLink as Link } from 'react-router-hash-link';
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/"><Logo /> </Link>
        <Link className="nav-item" smooth to="/#about">About Us</Link>
        <Link className="nav-item" smooth to="/#contact">Contact us</Link>
        <Link className="nav-item" smooth to="/#products-grid">Buy now</Link>
    </nav>
  )
}

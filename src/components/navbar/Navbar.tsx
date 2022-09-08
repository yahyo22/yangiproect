import React from 'react'
import { Link } from 'react-router-dom'

// Images
// import logo from "../../assets/img/logo.png";

export default function Navbar() {
  return (
    <nav>
        <div className="container">
            <ul>
                <li>
                    <Link to="#">
                        <img  alt="logo" />
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

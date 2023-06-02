import React from 'react'
import '../header/header.css'

const Header=()=>{
    return(
        <div className="Header">
            <nav className="header_nav">
                <li className="work">Navbar</li>
                <li className="work1">Home</li>
                <li className="work2">Features</li>
                <li className="work2">Pricing</li>
                <li className="work2">About</li>
                <li className="work_search">Search</li>
                <li className="work_search_btn">Search</li>
            </nav>
        </div>     
    )
}

export default Header
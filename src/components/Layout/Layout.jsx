import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout(){
    return(
        <>
            <header>
                <Link to="/">#VANLIFE</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <Outlet />
        </>
        
    )
}
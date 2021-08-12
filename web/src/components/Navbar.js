import React from 'react'
import { Link } from 'gatsby'

// TODO: 

export default function NavBar() {
    return (
        <nav className="flex justify-end p-16">
            <ul className="flex">
                <NavItem>About</NavItem>
                <NavItem>Portfolio</NavItem>
                <NavItem>Contact</NavItem>
            </ul>
        </nav>
    )
}

function NavItem({ children }) {
    return <Link className="pl-6 text-xl uppercase text-secondary">{children}</Link>
} 

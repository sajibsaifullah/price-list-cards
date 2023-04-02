import { list } from 'postcss';
import React from 'react';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/Home' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/services' }
    ];
      
    return (
        <nav>
            <ul>
                {
                    routes.map(route => <li>{route.name}</li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
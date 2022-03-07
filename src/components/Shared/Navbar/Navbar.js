import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/signIn'>Sign in</Link>
            </li>
            <li>
                <Link to='/admin'>Admin</Link>
            </li>
        </nav>
    );
};

export default Navbar;
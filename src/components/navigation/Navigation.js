import React from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <div className="navigation">
            <div className='logo__wrapper'>
                <Link to="/" className='logo'>MW</Link>
            </div>
            <ul>
                <Link class="navigation__link" to="/design" >Design</Link>
                <Link class="navigation__link" to="/art" >Art</Link>
                <Link class="navigation__link" to="/code" >Code</Link>
                <Link class="navigation__link" to="/about" >About</Link>
            </ul>
        </div>
    )
}


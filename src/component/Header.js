import React from 'react'
import logo from '../image/Screenshot-removebg-preview.png';
const Header = () => {
  return (
    <header className='container header__container'>
        <nav>
            <img src={logo} alt="logo" className='logo' />
        </nav>
        <h1 className='brandname'>
            Spyscore 
        </h1>
        <div>
            verified
        </div>
    </header>
  )
}

export default Header

import React from 'react'
import {ImCheckmark} from 'react-icons/im'
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
        <div className='verified'>
            <ImCheckmark/>
        </div>
    </header>
  )
}

export default Header

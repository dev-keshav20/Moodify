import React from 'react'
import Logo from './Logo'
import  '../Styles/Navbar.css'


const Navbar = () => {
  return (
    <div className='nav-container '>
        <Logo/>
        <div className="nav-text">
            <h1 >Welcome to Moodify</h1>
            <p>Your mood. Your music.</p>
        </div>

    </div>
   
  )
}

export default Navbar
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="Logo" width={100} />

                <div className="flexCenter h-menu">
                    <a href="">Residencies</a>
                    <a href="">Our Values</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className='button'>
                    <a href="">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header
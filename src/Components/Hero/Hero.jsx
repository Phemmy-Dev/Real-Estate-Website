import React from 'react'
import './Hero.css'
import { CiLocationOn } from "react-icons/ci";
import CountUp from 'react-countup';


const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="hero-left">
                <div className="hero-left-text">
                    <div className="orange-circle"></div>
                    <h1>Discover <br />Most Suitable <br />Property</h1>
                    <div className="hero-desc">
                        <p>Find a variety of properties that suit you very easilty</p>
                        <p>Forget all difficulties in finding a residence for you</p>
                    </div>
                    <div className="search-bar flexCenter">
                    <CiLocationOn color='var(--blue)' size={25} />
                    <input type="text" name="" id="" />
                    <button className="button button-2">Search</button>
                    </div>
                    
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                            <CountUp start={8983} end={9000} /><span className='plus'>+</span>
                            </span>
                            <span className='stat-desc'>Premium Products</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                            <CountUp start={1983} end={2000} /><span className='plus'>+</span>
                            </span>
                            <span className='stat-desc'>Happy Customers</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                            <CountUp start={5} end={28} /><span className='plus'>+</span>
                            </span>
                            <span className='stat-desc'>Awards won</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Hand */}
            <div className=" hero-right flexCenter">
                <div className="img-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
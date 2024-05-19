import React from 'react'
import './Residences.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";




const Residences = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-title flexColStart">
                <span  className='orangeText'>Best Choices</span>
                <span className='blueText'>Popular Residencies</span>

            </div>

            <Swiper {...sliderSettings}>
            <SliderButtons />

                {data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="r-card flexColStart">
                            <img src={card.image} alt="" />

                            <span className='r-price'>
                                <span style={{color:"orange"}}>$</span>
                                <span>{card.price}</span>
                            </span>

                            <span className='r-desc flexColStart'>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Residences


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="r-button flexCenter">
            <button className='flexCenter' onClick={() => swiper.slidePrev()}><MdNavigateBefore /></button>
            <button className='flexCenter' onClick={() => swiper.slideNext()}><MdNavigateNext />
</button>
        </div>
    )
}
import React, { Fragment } from 'react'
import "../../scss/style.scss"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FEEDBACK_DATA } from '../../assets/data/data'

const Feedback = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
    
  return (
    <Fragment>
        <div className="feedback container">
          <div className="feedback-title">See What They Said About Us</div>
          

          <div className="feedback-slider">
            <Slider {...settings}>
            
          
            {
                FEEDBACK_DATA.map(item => (
                    <div className="feedback-slider-item" key={item.id}>
                        <div className="feedback-slider-item-inner">
                            <div className="feedback-avt">
                            <img src={item.imgUrl} alt="" />
                            </div>

                            <div className="feedback-summary">
                            {item.summary}
                            </div>
                            <div className="username">{item.user_name}</div>
                            <div className="user-react">{item.user_react}</div>
                        </div>
                    </div>

                ))
            }

            </Slider>

        
          </div>
        </div>
    </Fragment>
  )
}

export default Feedback
import React from 'react'
import "../../scss/style.scss"
import SliderImg from "../../assets/img/content/slider.jpg";
import {BANNER_DATA} from "../../assets/data/data.js";

const SLIDER = {
    title:"Dumbbells Shop",
    sub_title:"Best body fitness",
    summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
}

const Slider = () => {
  return (
    <div className="slider">
          <div className="slider-item">
            <img src={SliderImg} alt="" />
            <div className="slider-content container">
              <div className="slider-inner">
                <div className="slider-title">{SLIDER.title}</div>
                <div className="slider-sub-title">{SLIDER.sub_title}</div>
                <div className="slider-summary">
                  {SLIDER.summary}
                </div>
                <a href="">Shop now</a>
              </div>
            </div>

            <div className="banner container">
              <div className="row">
                {BANNER_DATA.map((item) => ( 
                    <div className={item.class} key={item.id}>
                    
                        <img src={item.imgUrl} alt="" />
                        <div className="banner-item-content">
                            <div className="banner-item-title">{item.title}</div>
                            <div className="banner-item-summary">
                            {item.desc}
                            </div>

                        </div>
                    </div>
                    

                ))}
                
              </div>
            </div>
          </div>
        </div>
  )
}

export default Slider
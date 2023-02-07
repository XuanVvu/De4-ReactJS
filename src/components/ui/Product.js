import React, { Fragment } from 'react'

import "../../scss/style.scss"

import { PRODUCT_DATA } from '../../assets/data/data'

const Product = () => {
  return (
    <Fragment>
        <div className="product-wrapper">
          <div className="container">
            <div className="tab-bar">
              <ul>
                <li>Top sellers</li>
                <li>Featured</li>
                <li>Most reviews</li>
              </ul>
            </div>
           

            <div className="product">
              <div className="row">
                {
                    PRODUCT_DATA.map(item => (
                        <div className="product-item" key={item.id}>
                            <div className="product-item-inner">
                                <div className="product-item-img">
                                    <img src={item.imgUrl} alt="" />

                                </div>
                                <div className="product-item-title">{item.title}</div>
                                <div className="product-item-price"> ${item.price}.00</div>
                                <div className="product-icon">
                                <i className="fa-solid fa-basket-shopping"></i>
                                <i className="fa-solid fa-eye"></i>
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Product
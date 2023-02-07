import React, { Fragment } from 'react'
import Slider from '../components/ui/Slider'
import Product from '../components/ui/Product'
import Feedback from '../components/ui/Feedback'
import Branch from '../components/ui/Branch'

const Home = () => {
  return (
    <Fragment>
      <Slider/>
      <Product/>
      <Feedback/>
      <Branch/>
    </Fragment>
  )
}

export default Home
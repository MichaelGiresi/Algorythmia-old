import React from 'react'
import Hero from './Hero'
import Upcomming from './Upcomming'
import Footer from './Footer'

const HomeOutput = () => {
  return (
    <div className='app'>
      <Hero/>
      <Upcomming/>
      <Footer/>
    </div>
  )
}

export default HomeOutput
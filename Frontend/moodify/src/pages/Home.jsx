import React from 'react'
import MoodDetector from '../components/MoodDetector'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="h-full">
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home
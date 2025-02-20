// import React from 'react'

import About from "../../components/About"
import Banner from "../../components/Banner"
import Blog from "../../components/Blog"
import Contact from "../../components/Contact"
import Navbar from "../../components/Navbar"
import Partners from "../../components/Partners"
import Portfolio from "../../components/Portfolio"
import Service from "../../components/Service"
import Testimonial from "../../components/Testimonial"
import Resume from "../../Resume"

const Home = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Partners />
        <Blog />
        <Contact />
    </>
  )
}

export default Home
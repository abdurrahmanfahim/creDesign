// import React from 'react'

import Card from "../Card";
import Heading from "./Heading";
import galleryImg1 from '../assets/images/Placeholder.jpg'
import galleryImg2 from '../assets/images/Placeholder (1).jpg'
import galleryImg3 from '../assets/images/Placeholder (2).jpg'
import galleryImg4 from '../assets/images/Placeholder (4).jpg'
import galleryImg5 from '../assets/images/Placeholder (5).jpg'
import galleryImg6 from '../assets/images/Placeholder (6).jpg'

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <Heading sub={'My Portfolio'} headingStyle={'headingMain'} H2={'VISIT MY PORTFOLIO'} />
          <div className="gallery">
            <Card galleryImg={galleryImg1} cardStyle={'galleryImg'}  />
            <Card galleryImg={galleryImg2} cardStyle={'galleryImg'}  />
            <Card galleryImg={galleryImg3} cardStyle={'galleryImg'}  />
            <Card galleryImg={galleryImg4} cardStyle={'galleryImg'}  />
            <Card galleryImg={galleryImg5} cardStyle={'galleryImg'}  />
            <Card galleryImg={galleryImg6} cardStyle={'galleryImg'}  />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

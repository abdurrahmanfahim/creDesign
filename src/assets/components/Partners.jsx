// import React from 'react'

import Card from "../Card";
import Heading from "./Heading";
import partnerImg1 from '../assets/images/Frame.svg'
import partnerImg2 from '../assets/images/Frame-1.svg'
import partnerImg3 from '../assets/images/Frame-2.svg'
import partnerImg4 from '../assets/images/Frame-3.svg'
import partnerImg5 from '../assets/images/Frame-4.svg'
import partnerImg6 from '../assets/images/Frame-5.svg'

const Partners = () => {
  return (
    <>
      <section id="partner">
        <div className="container">
          <Heading sub={'Partners'} headingStyle={'headingMain'} H2={'REPUTED PARTNER'} />

          <div className="card-box">

            <Card partners={partnerImg1} cardStyle={'partnerCard'} />
            <Card partners={partnerImg2} cardStyle={'partnerCard'} />
            <Card partners={partnerImg3} cardStyle={'partnerCard'} />
            <Card partners={partnerImg4} cardStyle={'partnerCard'} />
            <Card partners={partnerImg5} cardStyle={'partnerCard'} />
            <Card partners={partnerImg6} cardStyle={'partnerCard'} />

            <div className="card">
              <img src="/public/images/Frame.svg" alt="" />
            </div>
            <div className="card">
              <img src="/public/images/Frame-1.svg" alt="" />
            </div>
            <div className="card">
              <img src="/public/images/Frame-2.svg" alt="" />
            </div>
            <div className="card">
              <img src="/public/images/Frame-3.svg" alt="" />
            </div>
            <div className="card">
              <img src="/public/images/Frame-4.svg" alt="" />
            </div>
            <div className="card">
              <img src="/public/images/Frame-5.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;

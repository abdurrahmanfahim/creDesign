// import React from 'react'
// import bannerImg from '../assets/images/fahim-avator.jpg'

import Button from "./Button";
import Heading from "./Heading";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="bg">
          <div className="container">
            <div className="wrap">
              <div className="left">
              <Heading sub={'I AM DESIGNER'} H1={'Creative Design and Web Solutions'} para={'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.'} paraStyle={'para'} />
              <Button href={'#'} style={'btnMain'} content={'Download My CV'} />
                {/* <a className="cvBtn" href="#">
                  Download My CV
                </a> */}
              </div>
              <div className="right">
                {/* <img src={bannerImg} alt="Image-1" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

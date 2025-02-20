// import React from 'react'

import Card from "../../Card";
import Heading from "./Heading";
import clientAvatar1 from '../assets/images/Image.png'
import clientAvatar2 from '../assets/images/Image (1).png'
import clientAvatar3 from '../assets/images/Image (2).png'

const Testimonial = () => {
  return (
    <>
      <section id="testimonial">
        <div className="container">

            <Heading sub={'Testimonial'} headingStyle={'headingMain'} H2={'Client Feedback'}  />

          <div className="card-box">

            <Card avatar={clientAvatar1} cardStyle={'clientCard'} heading={'Siam Talukder'} date={'CTO, Xyz Group'} para={'“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.'} />
            <Card avatar={clientAvatar2} cardStyle={'clientCard'} heading={'ABM Shawon Islam'} date={'CTO, Xyz Group'} para={'“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.'} />
            <Card avatar={clientAvatar3} cardStyle={'clientCard'} heading={'Azmir Uddin Alif'} date={'CTO, Xyz Group'} para={'“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.'} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

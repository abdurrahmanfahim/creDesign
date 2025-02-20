// import React from 'react'

import Button from "./Button";
import Heading from "./Heading";
import InputBox from "./InputBox";
import contactIcon1 from '../assets/images/Icon32.svg'
import contactIcon2 from '../assets/images/Group 106.svg'
import contactIcon3 from '../assets/images/Group4.svg'
import Addresses from "./Addresses";


const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">

            <Heading sub={'My Contact'} headingStyle={'headingMain'} H2={'I WANT TO HEAR FROM YOU'} />

          <div className="wrap">
            <form action="">
                <InputBox style={'contactFormInput'} type={'text'} placeholder={'Your name'} />
                <InputBox style={'contactFormInput'} type={'email'} placeholder={'Your email'} />
                <InputBox style={'contactFormInput'} type={'text'} placeholder={'Your phone'} />
                <InputBox style={'contactFormInput'} type={'text'} placeholder={'Subject'} />
                <InputBox textAriaStyle={'contactFormTAria'} placeholder={'Your masage'} />
              
              <Button style={'btnMain'} href={'#'} content={'Send Me Message'} />
            </form>
            <div className="contacts">

                <Addresses img={contactIcon1} heading={'Address'} info={'202 Dog Hill Lane Beloit, KS 67420'} />
                <Addresses img={contactIcon2} heading={'Phone'} info={'+8801613529163'} />
                <Addresses img={contactIcon3} heading={'Email'} info={'ar.fahim.dev@gmail.com'} />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

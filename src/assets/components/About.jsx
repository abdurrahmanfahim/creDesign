// import React from 'react'

import Badge from "./Badge";
import Heading from "./Heading";
import BadgeIcon1 from "../assets/images/Icon0.svg";
import BadgeIcon2 from "../assets/images/Icon (1).svg";
import checkIcon from '../assets/images/check2-square 1.svg'
import Button from "./Button";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="wrap">
            <div className="left">
              {/* <img src="../images/Image.jpg" alt="Image-2" /> */}
            </div>
            <div className="right">
                <Heading sub={'About Me'} H3={'I Can Design Anything You Want'} para={'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.'} paraStyle={'para'} /> 
              {/* <small>
                <div className="circle-1">
                  <div className="circle-2"></div>
                </div>
                <span className="sm-heading">About Me</span>
              </small>
              <h3>I Can Design Anything You Want</h3>
              <p className="para">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit.
              </p> */}
              <div className="archive">
                <Badge icon={BadgeIcon1} num={'350+'} para={'Complete Project'} />
                <Badge icon={BadgeIcon2} num={'16+'} para={'Year of experience'} />
              </div>
              <p className="work">
                <img src={checkIcon} alt={checkIcon}/>
                Work simple and cline design
              </p>
              <p className="work">
                <img src={checkIcon} alt={checkIcon}/>
                New idea and user friendly design
              </p>

              <Button style={'btnMain'} href={'#'} content={'Download My CV'} />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

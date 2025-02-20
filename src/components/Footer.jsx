// import React from 'react'

import Button from "./Button"
import logo from '../assets/images/logo2.png'
import faceBookIcon from '../assets/images/Facebook Icon.svg'
import TweeterIcon from '../assets/images/Vector.svg'
import dribbleIcon from '../assets/images/dribbble (2) 1.svg'
import behanceIcon from '../assets/images/behance (2) 1.svg'
import locationIcon from '../assets/images/Icon-l.svg'
import phoneIcon from '../assets/images/Icon-p.svg'

const Footer = () => {
  return (
    <>
        <section id="footer">
      <div className="container">
        <div className="wrap">
          <div className="logo-part">
            <div className="logo">
              <a href="#">
                <img src={logo} alt={logo} />
              </a>
            </div>
            <p className="para">
            At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati 
            </p>
            <span>
            ar.fahim.dev@gmail.com
            </span>
          </div>
          <div className="link-part">
            <div className="explore">
              <div className="f-header">
                Explore Link
              </div>
              <ul>
                <li><Button style={'footerNavLink'} href={'#'} content={'About'} /></li>
                <li><Button style={'footerNavLink'} href={'#'} content={'Resume'} /></li>
                <li><Button style={'footerNavLink'} href={'#'} content={'Portfolio'} /></li>
                <li><Button style={'footerNavLink'} href={'#'} content={'Blog'} /></li>

              </ul>
            </div>
            <div className="services">
              <div className="f-header">
                My Services
              </div>
              <ul>
                <li><Button style={'footerNavLink'} href={'#'} content={'UI/UX Design'} /></li>
                <li><Button style={'footerNavLink'} href={'#'} content={'Mobile App'} /></li>
                <li><Button style={'footerNavLink'} href={'#'} content={'Graphics Design'} /></li>
                <li><Button style={'footerNavLink'} href={'#'} content={'Web Developer'} /></li>
              </ul>
            </div>
            <div className="follow">
              <div className="f-header">
                My Services
              </div>
              <ul className="links">
                <li><a href="#"><img src={faceBookIcon} alt={faceBookIcon} /></a></li>
                <li><a href="#"><img src={TweeterIcon} alt={TweeterIcon} /></a></li>
                <li><a href="#"><img src={dribbleIcon} alt={dribbleIcon} /></a></li>
                <li><a href="#"><img src={behanceIcon} alt={behanceIcon} /></a></li>
              </ul>
              <div className="location">
                <i>
                  <img src={locationIcon} alt={locationIcon} />
                </i>
                <span className="f-sp">
                  202 Dog Hill Lane Beloit, KS 67420
                </span>
              </div>
              <div className="phone">
                <i>
                  <img src={locationIcon} alt={locationIcon} />
                </i>
                <span className="f-sp">
                  +8801613529163
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer
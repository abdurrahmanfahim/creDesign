// import React from 'react'

import Button from "./Button"

const Footer = () => {
  return (
    <>
        <section id="footer">
      <div className="container">
        <div className="wrap">
          <div className="logo-part">
            <div className="logo">
              <a href="#">
                <img src="/public/images/logo2.png" alt="logo" />
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
                <li><a href="#"><img src="/public/images/Facebook Icon.svg" alt="Icon" /></a></li>
                <li><a href="#"><img src="/public/images/Vector.svg" alt="Icon" /></a></li>
                <li><a href="#"><img src="/public/images/dribbble (2) 1.svg" alt="Icon" /></a></li>
                <li><a href="#"><img src="/public/images/behance (2) 1.svg" alt="Icon" /></a></li>
              </ul>
              <div className="location">
                <i>
                  <img src="/public/images/Icon-l.svg" alt="Icon" />
                </i>
                <span className="f-sp">
                  202 Dog Hill Lane Beloit, KS 67420
                </span>
              </div>
              <div className="phone">
                <i>
                  <img src="/public/images/Icon-p.svg" alt="Icon" />
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
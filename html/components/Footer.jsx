

const Footer = () => {
  return (
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
              md.abdur.rahman.fahim@gmail.com
            </span>
          </div>
          <div className="link-part">
            <div className="explore">
              <div className="f-header">
                Explore Link
              </div>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="services">
              <div className="f-header">
                My Services
              </div>
              <ul>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Mobile App</a></li>
                <li><a href="#">Graphics Design</a></li>
                <li><a href="#">Web Developer</a></li>
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
  )
}

export default Footer
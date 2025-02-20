

export const About1 = () => {
    
  return (
    <section id="about">
        <div className="container">
            <div className="wrap">
                <div className="left">
                    {/* <img src="../images/Image.jpg" alt="Image-2" /> */}
                </div>
                <div className="right">
                        <small>
                            <div className="circle-1">
                                <div className="circle-2"></div>
                            </div>
                            <span className="sm-heading">About Me</span>
                        </small>
                    <h3>
                    I   Can Design Anything You Want
                    </h3>
                    <p className="para">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                    <div className="archive">
                        <div className="l">
                            <ul className="box">
                                <li className="icn"><img src="../images/Icon0.svg" alt="Icon1" /></li>
                                <li className="a-txt">
                                    <span>350+</span>
                                    <p className="span">Complete Project</p>
                                </li>
                            </ul>
                        </div>
                        <div className="r">
                            <ul className="box">
                                <li className="icn"><img src="../images/Icon (1).svg" alt="Icon2" /></li>
                                <li className="a-txt">
                                    <span>16+</span>
                                    <p className="span">Year of experience</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <p className="work"><img src="../images/check2-square 1.svg" alt="check" />Work simple and cline design</p>
                        <p className="work"><img src="../images/check2-square 1.svg" alt="check" />New idea and user friendly design</p>
                    <a className="cvBtn" href="#">Download My CV</a>
                </div>
            </div>
        </div>
    </section>
  )
}


export default About1
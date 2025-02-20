

const Blog1 = () => {
  return (
    <section id="blog">
        <div className="container">
            <small className="ser">
                <div className="circle-1">
                    <div className="circle-2"></div>
                </div>
                <span className="sm-heading">My Blog</span>
            </small>
            <div className="headings">
                <h2>
                    LATEST BLOG
                </h2>
            </div>
            <div className="gallery">
                <div className="card">
                    <img src="/public/images/Rectangle 41-2.jpg" alt="Rectangle" />
                    <div className="txt">
                        <span>
                            20 January, 2023
                        </span>
                        <p>
                            Become a UX/UI Designer With Career Foundry.
                        </p>
                        <a href="#">
                            Read More &rarr;
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img src="/public/images/Rectangle 41-1.jpg" alt="Rectangle" />
                    <div className="txt">
                        <span>
                            20 January, 2023
                        </span>
                        <p>
                            Become a UX/UI Designer With Career Foundry.
                        </p>
                        <a href="#">
                            Read More &rarr;
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img src="/public/images/Rectangle 41.jpg" alt="Rectangle" />
                    <div className="txt">
                        <span>
                            20 January, 2023
                        </span>
                        <p>
                            Become a UX/UI Designer With Career Foundry.
                        </p>
                        <a href="#">
                            Read More &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog1
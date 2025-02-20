// import React from 'react'

import Card from "../components/Card"
import Heading from "./Heading";
import blogImg1 from "../assets/images/Rectangle 41.jpg";
import blogImg2 from "../assets/images/Rectangle 41-1.jpg";
import blogImg3 from "../assets/images/Rectangle 41-2.jpg";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container">
          <Heading
            sub={"My Blog"}
            headingStyle={"headingMain"}
            H2={"LATEST BLOG"}
          />

          <div className="gallery">
            <Card
              cardStyle={"cardBlog"}
              blogImg={blogImg1}
              date={"20 January, 2023"}
              heading={"Become a UX/UI Designer With Career Foundry."}
              btnText={"Read More →"}
            />
            <Card
              cardStyle={"cardBlog"}
              blogImg={blogImg2}
              date={"20 January, 2023"}
              heading={"Become a UX/UI Designer With Career Foundry."}
              btnText={"Read More →"}
            />
            <Card
              cardStyle={"cardBlog"}
              blogImg={blogImg3}
              date={"20 January, 2023"}
              heading={"Become a UX/UI Designer With Career Foundry."}
              btnText={"Read More →"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

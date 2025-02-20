// import React from 'react'

import icon1 from "../assets/images/Icon.svg";
import icon2 from "../assets/images/Icon (1).svg";
import icon3 from "../assets/images/Icon (2).svg";
import icon4 from "../assets/images/Icon (3).svg";
import icon5 from "../assets/images/Icon (4).svg";
import icon6 from "../assets/images/Icon (5).svg";
import icon7 from "../assets/images/Icon (6).svg";
import icon8 from "../assets/images/Icon (7).svg";

import Card from "../components/Card"
import Heading from "./Heading";

const Service = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <Heading
            headingStyle={"headingMain"}
            sub={"My Service"}
            H2={"Services I offer"}
          />

          <div className="card-box wrap">
            <Card
              cardStyle={"iconCard"}
              icon={icon1}
              heading={"UI/UX Design"}
              para={
                "Hen our power of choice is untrammelled and when nothing prevents our being able"
              }
              paraStyle={"box-p"}
            />
            <Card
              cardStyle={"iconCard"}
              icon={icon2}
              heading={"Mobile App"}
              para={
                "Hen our power of choice is untrammelled and when nothing prevents our being able"
              }
              paraStyle={"box-p"}
            />
            <Card
              cardStyle={"iconCard"}
              icon={icon3}
              heading={"Graphic Design"}
              para={
                "Hen our power of choice is untrammelled and when nothing prevents our being able"
              }
              paraStyle={"box-p"}
            />
            <Card
              cardStyle={"iconCard"}
              icon={icon4}
              heading={"Web Development"}
              para={
                "Hen our power of choice is untrammelled and when nothing prevents our being able"
              }
              paraStyle={"box-p"}
            />
            <Card
              cardStyle={"iconCard"}
              icon={icon5}
              heading={"SEO Optimisation"}
              para={
                "Hen our power of choice is untrammelled and when nothing prevents our being able"
              }
              paraStyle={"box-p"}
            />
            <Card
              cardStyle={"iconCard"}
              icon={icon6}
              heading={"WordPress Developer"}
              para={
                "Hen our power of choice is untrammelled and when nothing prevents our being able"
              }
              paraStyle={"box-p"}
            />
            <Card
              cardStyle={"iconCard"}
              icon={icon7}
              heading={"App Development"}
              para={
                "Hen our power of choice is untrammelled and when nothing prevents our being able"
              }
              paraStyle={"box-p"}
            />
            <Card
              cardStyle={"iconCard"}
              icon={icon8}
              heading={"Business Strategy"}
              para={
                "Hen our power of choice is untrammelled and when nothing prevents our being able"
              }
              paraStyle={"box-p"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

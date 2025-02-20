// import React from 'react'

import Card from "./Card";
import Heading from "./assets/components/Heading";

const Resume = () => {
  return (
    <>
      <section id="resume">
        <div className="container">
          <Heading
            sub={"My Resume"}
            headingStyle={"headingMain"}
            H2={"10+ YEARS OF EXPERIENCE"}
          />

          <div className="wrap">
            <Heading H5={"Education"} />

            <div className="row">
              <Card
                cardStyle={"resumeCard"}
                heading={"BSc in Computer Science"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />

              <Card
                cardStyle={"resumeCard"}
                heading={"BSc in Computer Science"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />

              <Card
                cardStyle={"resumeCard"}
                heading={"BSc in Computer Science"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />
            </div>
            <Heading H5={"Software Skills"} />
            <div className="row">
              <Card
                cardStyle={"resumeCard"}
                heading={"UI/UX Design"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />
              <Card
                cardStyle={"resumeCard"}
                heading={"UI/UX Design"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />
              <Card
                cardStyle={"resumeCard"}
                heading={"UI/UX Design"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />
            </div>
            <Heading H5={"Experience"} />
            <div className="row">
              <Card
                cardStyle={"resumeCard"}
                heading={"Web Developer & Trainer"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />
              <Card
                cardStyle={"resumeCard"}
                heading={"Web Developer & Trainer"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />
              <Card
                cardStyle={"resumeCard"}
                heading={"Web Developer & Trainer"}
                date={"University of ULAV (2018 - 2022)"}
                para={
                  "Hen our power of choice is untrammelled and when nothing prevents our being able"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

/* eslint-disable react/prop-types */

// import React from 'react'

const Heading = ({
  sub, 
  H1, 
  H2, 
  H3, 
  H4, 
  H5, 
  H6, 
  headingStyle,
  para, 
  paraStyle 
  }) => {

  return (
    <>
      <div className={headingStyle}>
      {sub && (
        <small>
          <div className="circle-1">
            <div className="circle-2"></div>
          </div>
          <span className="sm-heading">{sub}</span>
        </small>
      )}
      {H1 && <h1>{H1}</h1>}
      {H2 && <h2>{H2}</h2>}
      {H3 && <h3>{H3}</h3>}
      {H4 && <h4>{H4}</h4>}
      {H5 && <h5>{H5}</h5>}
      {H6 && <h6>{H6}</h6>}
      {para && <p className={paraStyle}>{para}</p>}
      </div>
    </>
  );
};

export default Heading;

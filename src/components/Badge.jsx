/* eslint-disable react/prop-types */
// import React from 'react'

const Badge = ({icon, num, para}) => {
  return (
    <>
      <ul className="box">
        <li className="icn">
          <img src={icon} alt={icon} />
        </li>
        <li className="a-txt">
          <span>{num}</span>
          <p className="span">{para}</p>
        </li>
      </ul>
    </>
  );
};

export default Badge;

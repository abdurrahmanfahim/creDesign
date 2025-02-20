/* eslint-disable react/prop-types */
// import React from 'react'

const Addresses = ({ img, heading, info }) => {
  return (
    <>
      <ul>
        <li>
          <img src={img} alt={img} />
        </li>
        <li>
          <span className="addr">{heading}</span>
          <span>{info}</span>
        </li>
      </ul>
    </>
  );
};

export default Addresses;

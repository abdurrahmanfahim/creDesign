/* eslint-disable react/prop-types */
// import React from 'react'

const Card = ({
  cardStyle,
  icon,
  heading,
  para,
  paraStyle,
  date,
  galleryImg,
  avatar,
  partners,
  blogImg,
  href,
  btnText
}) => {
  return (
    <>
      {icon && (
        <div className={cardStyle}>
          <img src={icon} alt={icon} />
          <h4>{heading}</h4>
          <p className={paraStyle}>{para}</p>
        </div>
      )}

      {avatar && (
        <div className={cardStyle}>
          <ul>
            <li>
              <img src={avatar} alt={avatar} />
            </li>
            <li>
              <span className="name">{heading}</span>
              <span>{date}</span>
            </li>
          </ul>
          <p className={paraStyle}>{para}</p>
        </div>
      )}

      {galleryImg && (
        <img className={cardStyle} src={galleryImg} alt={galleryImg} />
      )}

      {cardStyle == "resumeCard" && (
        <div className={cardStyle}>
          <h6>{heading}</h6>
          <span>d{date}</span>
          <p>{para}</p>
        </div>
      )}

      {partners && (
        <div className={cardStyle}>
          <img src={partners} alt={partners} />
        </div>
      )}

      {blogImg && (
        <div className={cardStyle}>
          <img src={blogImg} alt={blogImg} />
          <div className="txt">
            <span>{date}</span>
            <p>{heading}</p>
            <a href={href}>{btnText}</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

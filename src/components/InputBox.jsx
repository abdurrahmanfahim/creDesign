/* eslint-disable react/prop-types */
// import React from 'react'

const InputBox = ({style, type, placeholder, textAriaStyle}) => {
  return (
    <>
    {
        textAriaStyle 
        ?
        <textarea className={textAriaStyle} placeholder={placeholder}></textarea>
        :
        <input className={style} type={type} placeholder={placeholder} />
    }
    </>
  )
}

export default InputBox
/* eslint-disable react/prop-types */
// import React from 'react'

const Button = ({style, href, content, type, target, func, iconLeft, iconRight}) => { 

  return (
    
    href
        ?
    <a href={href} onClick={func} target={target} className={style}>{
        iconLeft && iconLeft + " " + content || iconRight && content + ' ' + iconRight || content 
    }</a>
        :
    <button onClick={func} type={type} className={style}>{
        iconLeft && iconLeft + " " + content || iconRight && content + ' ' + iconRight || content  
    }</button>

  )
}

export default Button
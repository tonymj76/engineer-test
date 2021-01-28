import React from 'react'

export default function CardUserflow({children, headIcon, headText}) {
  return (
    <div className="card-holder">
      <div className="header flex-item">
        <div><img src={headIcon} alt={headIcon}/></div>
        <p className="head-text">{headText}</p>
      </div>
      {children}
    </div>
  )
}

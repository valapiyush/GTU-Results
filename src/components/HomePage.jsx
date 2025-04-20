import React from 'react'
import "../assets/styles/GtuResultPage.css"
import { GtuResultPage } from './GtuResultPage'
export const HomePage = () => {
  return (
    <div>
        <GtuResultPage/>
        <div className="bounce-wrapper">
      <div className="bounce-track">
        Click here to submit your Bank Account Details
      </div>
    </div>
    </div>
  )
}

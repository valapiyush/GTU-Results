import React from 'react'
import { GtuResultPage } from './GtuResultPage'
import ResultViewer from './ResultViewer'

export const ResultPage = () => {
  return (
    <div className='result-main-container'>
        <GtuResultPage/>
        <div className="gtu-container">
            <div className="result-logo">
          <img src="/images/gtuLogo.png" alt="" />
        </div>
        <div className="gtu-header">
          <b>GUJARAT TECHNOLOGICAL UNIVERSITY</b>
        </div>
        
        </div>
        <div className='result-header'>
        Student Result
        </div>
        <div >
      <ResultViewer />
    </div>
    </div>
  )
}

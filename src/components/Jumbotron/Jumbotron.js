import React from 'react'
// import { homepageContent } from '../../pages/HomePage/HomePageContent'

function Jumbotron(data) {

  return (
      <>
        <div className="jumbotron rockBackground">
          <div className="jumboCopy">
              <h1>{data.h1}</h1>
              <p>{data.p}</p>
          </div>
        </div>
      </>
  )
}

export default Jumbotron
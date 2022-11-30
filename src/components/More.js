import React from 'react'
import { Link } from 'react-router-dom'
const More = () => {
  return (
    <div className='container_two'>
      <div className="more">
        <h2>About me</h2>
        <div className="mere">
          <p>I'm Farhatun Nisha Ansari. I graduated from Seth Kesrimal Porwal College (Nagpur University) with a degree in Information Technology(IT) in year 2021. I love involving myself into Web devlopment, problem-solving & I'm willing to learn more with passion & want to become a Full Stack Developer in future. </p>
        </div>
        <Link className="resume" to="/resume">Resume</Link>
      </div>

      <div className="gole">
        <div className="gola1"></div>
        <div className="gola2"></div>
      </div>
     
    </div>
  )
}

export default More

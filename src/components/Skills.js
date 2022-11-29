import React from 'react'
import html from '../icons/tml.png'
import css from '../icons/css.png'
import javascript from '../icons/javascript.png'
import reacticon from '../icons/react.png'
import github from '../icons/github.png'
import vscode from '../icons/vscode.png'
import nodejs from '../icons/nodejs.png'
import responsive from '../icons/responsive.png'
import express from '../icons/express-js-icon.png'

const Skills = () => {
  return (
    <div className='skill_container' id='skill'>
      <div className="list">
        <p>Things I Can Do</p>
      </div>
      <div className="icons">
        <div className="logo">
          <img className='size' src={html} alt="html" />
          <h2>HTML5</h2>

        </div>
        <div className="logo">
          <img  className='size' src={css} alt="css" />
          <h2>CSS3</h2>
        </div>

        <div className="logo">
          <img className='size' src={javascript} alt="javascript" />
          <h2>JavaScript</h2>
        </div>
        <div className="logo">
          <img className='size' src={reacticon} alt="react" />
          <h2>React</h2>
        </div>
        <div className="logo">
          <img className='size' src={github} alt="github" />
          <h2>Github</h2>
        </div>
        <div className="logo">
          <img className='size' src={vscode} alt="vacode" />
          <h2>VS code</h2>
        </div>
        <div className="logo">
          <img className='size' src={nodejs} alt="nodejs" />
          <h2>Node.js</h2>
        </div>
        <div className="logo">
          <img className='size' src={express} alt="exp" />
          <h2>Express.js</h2>
        </div>
        <div className="logo">
          <img className='size' src={responsive} alt="responsive" />
          <h2>Responsive design</h2>
        </div>
      </div>
  
    </div>
  )
}

export default Skills

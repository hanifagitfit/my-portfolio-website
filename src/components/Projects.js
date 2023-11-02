import React from 'react'
import advice from '../pic/advice.png'
import textutils from '../pic/Textutils.png'
import news from '../pic/news.png'
import hospital from '../pic/helpingHand.png';


const Projects = () => {
    return (
        <section className='project_container' id='project'>
            <div className="title">My Projects</div>
            <div className="projects">

                <div className="detail">
                    <img src={hospital} alt="hospital" />
                    <div className="box">
                        <p>HELPING HANDS | HOSPITAL WEBSITE</p>
                        <p className='prime'>Helping Hands is a hospital website built with react.<br /> Have Search bar to find Doctor.  responsive design<br />with multiple categories .</p>

                        <button className='btn'><a href="https://helping-hands-hospitals.netlify.app/">See here</a></button>
                    </div>
                </div>

                <div className="detail">
                    <img src={news} alt="news" />
                    <div className="box">
                        <p>DailyHunt | News App</p>
                        <p className='prime'>DailyHunt is a news app built with React using<br /> api [News Api] It shows almost every <br /> type of news,such as Sports,Entertainment,<br />  technology with infinte scroll and Top loading bar .</p>
                        <button className='btn'><a href="https://github.com/hanifagitfit/newsapp">See here</a></button>
                    </div>
                </div>

                <div className="detail">
                    <img src={textutils} alt="" />
                    <div className="box">
                        <p>TEXTUTILS | WORD COUNTER APP </p>
                        <p className='prime'>This react app is not just count a word or character<br /> but also calculate the reading time.You can make<br /> the whole phrase uppercase,lowercase & reverse<br /> the phrase too. Light mode is by default you can<br /> enable dark mode for ease of your eyes.</p>

                        <button className='btn'><a href="https://hanifagitfit.github.io/my-app/">See here</a></button>

                    </div>
                </div>



                <div className="detail">
                    <img src={advice} alt="advice" />
                    <div className="box">
                        <p>ADVICE GENERATOR APP </p>
                        <p className='prime'>This app is built with React and use<br /> api [Advice Slip API] which make it possible to<br /> generate a new piece of advice with every<br /> single click on dice.</p>

                        <button className='btn'><a href=" https://hanifagitfit.github.io/advice-generator-app/">See here</a></button>
                    </div>
                </div>
              

            </div>
        </section>
    )
}

export default Projects

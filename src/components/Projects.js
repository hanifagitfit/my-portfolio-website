import React from 'react'
import ecommerce from '../pic/ecommerce.png'
import advice from '../pic/advice.png'
import textutils from '../pic/Textutils.png'
import news from '../pic/news.png'


const Projects = () => {
    return (
        <section className='project_container' id='project'>
            <div className="title">My Projects</div>
            <div className="projects">

                <div className="detail">
                    <img src={ecommerce} alt="ecom" />
                    <div className="box">
                        <p>E-COMMERCE PRODUCT PAGE | FRONTEND MENTOR CHALLENGE</p>

                        <p className='prime'>This page is build with plain html,css and javaScript<br /> with add-to-cart functionality.  Image-slidder &<br /> responsive design.</p>

                        <button className='btn'><a href="https://hanifagitfit.github.io/ecommerce-product-page/">See here</a></button>
                    </div>
                </div>

                <div className="detail">
                    <img src={news} alt="news" />
                    <div className="box">
                        <p>DailyHunt | News App</p>
                        <p className='prime'>DailyHunt is a news app build with React using<br /> api [News Api] It shows almost every <br /> type of news,such as Sports,Entertainment,<br />  technology with infinte scroll and Top loading bar .</p>
                        <button className='btn'><a href="https://github.com/hanifagitfit/newsapp">See here</a></button>
                    </div>
                </div>

                <div className="detail">
                    <img src={advice} alt="advice" />
                    <div className="box">
                        <p>ADVICE GENERATOR APP </p>
                        <p className='prime'>This app is build with React and use<br /> api [Advice Slip API] which make it possible to<br /> generate a new piece of advice on every<br /> single click on dice.</p>

                        <button className='btn'><a href=" https://hanifagitfit.github.io/advice-generator-app/">See here</a></button>
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

            </div>
        </section>
    )
}

export default Projects

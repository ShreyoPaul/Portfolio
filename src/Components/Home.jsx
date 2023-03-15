import React from 'react';
// import {Link } from 'react-router-dom';
import '../css/home.css';
import Typical from 'react-typical';
import Project from './Project';
import Contact from './Contact'
import Skill from './Skill';

const Home = () => {
  return (
    <section className='d-flex m-0 mt-0  flex-column'>
      <div className=' sec1 bg flex-column align-items-left justify-content-start'>
        <h1 className='heroName text-start m-5 p-5 mb-0 mt-3 justify-content-left  '>
          Hey! I'm Shreyo,
          <Typical
            loop={Infinity}

            steps={[
              "Web Developer", 1500,
              "Web Designer", 1500,
              "Programmer", 1500
            ]} />
        </h1>

        <h5 className="text-start justify-content-left mx-5 px-5 intro" >
          I am from West Bengal, India. I am pursuing BTech in Information Technology in MAKAUT,WB. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites. Working on my skills. Love to solve real life problem with coding mind.
        </h5>

        <h5 className="text-start justify-content-left mx-5 px-5 welcome" >Welcome to <span style={{
          color: '#E6E6E6',
          textShadow: ' 1px 2px 3px white', padding: '0 1%'
        }}>My Portfolio</span>, Feel free for a tour.</h5>

        <h5 className="text-start justify-content-left mt-3 mx-5 px-5 mb-0 social">
        <a href='https://github.com/ShreyoPaul' ><i className="fa-brands fa-github  pe-4" ></i></a>
        <a href='https://www.instagram.com/s_hrey_o'><i className="fa-brands fa-instagram pe-4"></i></a>
        <a href='https://www.facebook.com/shreyo.paul'><i className="fa-brands fa-facebook pe-4"></i></a>
          <a href='https://www.linkedin.com/in/shreyo-paul/'><i className="fa-brands fa-linkedin pe-4"></i></a>
          <a href='https://t.me/SHrEyO0'><i className="fa-brands fa-telegram pe-4"></i></a>
        </h5>
      </div>
      <div className="sec2 mb-3 flex-column align-items-left justify-content-start">
        <Skill />
      </div>

      <div className="sec3 mb-3 flex-column align-items-left justify-content-start">
        <Project />
      </div>

      <div className="sec3  flex-column align-items-left justify-content-start">
        <Contact />
      </div>




    </section>
  )
}

export default Home
import React from 'react';
import projects from './projectset';
import Projectcard from './Projectcard'
import '../css/projectcard.css'

const Project = () => {
  return (
    <>
      <h1 className='project text-start mx-5 px-5 mt-2 justify-content-center align-items-center'>
        Projects
      </h1>
      <div className=' d-flex flex-wrap mx-5 px-5 mb-3' style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
      }}>
        {projects.map((data, index) => {
          const { name, pic, link, github } = data;
          return <Projectcard key={index} img={pic} title={name} link={link} github={github}/>;
        })}
      </div>
    </>
  )
}

export default Project
import React from 'react';
import skills from './skills';
import Skillset from './Skillset';

const Skill = () => {
  return (
    <>
    
      <h1 className='skill text-start  mx-5 px-5 mb-0 justify-content-left  '>
        Skills
      </h1>
      <div className="skilsets d-flex flex-row flex-wrap mx-5 px-5 ">
        {skills.map((x, index) => {
          return <Skillset pic={x.pic} name={x.name} key={index} />
        })}
      </div>
    </>
  )
}

export default Skill
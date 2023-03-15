import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/skillset.css'

const Skillset = (props) => {
  return (
    <div 
    className='d-flex flex-column skillset justify-content-center align-items-center flex-wrap '
    style={{
    }}
    >
        <img 
        src={props.pic} 
        alt="" 
        style={{
            width:'60px',
            height:'60px',
            }}/>
        <h5 className="name" style={{padding:'2%',marginTop:' 10px'}}>{props.name}</h5>
    </div>
  )
}

export default Skillset;
import React, { useState } from 'react'
import {
  NavLink,
  useNavigate,
} from "react-router-dom";
import '../css/error404.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Error404 = () => {
  const [tf, setTf] = useState(false)
  // const location = useLocation()
  const navigate = useNavigate()
  
  const toggleOpp = () => {
    setTf(true);
    // location.pathname = '/'
    navigate({
      pathname: '/'
    });
    // console.log(location)
  }
  setTimeout(toggleOpp,5000);
  
  if (tf) {
    return (
      <>
        {/* <Home/> */}
      </>
    )
  }
  else {
    return (<>
      <div className='err'>
        <h1>4<span><i className="fas fa-ghost"></i></span>4</h1>
        <h2>Error: 404 page not found</h2>
        <p>Sorry, the page you're looking for cannot be found</p>
        <NavLink to="/"><div className='btn btn-light mt-4'>Go to Homepage</div></NavLink>
      </div>
    </>)
  }
}

export default Error404;
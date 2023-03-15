import React from 'react'

const Footer = () => {
    return (

        <div className='footer mt-5 justify-content-center align-items-center text-center p-4' style={{ fontSize: '18px', fontWeight: '500', display: 'flex', color: '#fff',marginTop:'10%', backgroundColor: '#606266', width: '100%' }}>
            &copy; {new Date().getFullYear()} Copyright :{' '}  All Rights Reserved | Shreyo Paul
            
        </div>

    )
}

export default Footer
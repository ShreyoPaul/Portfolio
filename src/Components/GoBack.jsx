import React, { useState } from 'react'
import '../css/goback.css'
import { NavLink } from 'react-router-dom'

const GoBack = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <>

            <NavLink
                to="/"
                className="up material-symbols-outlined "
                style={{ display: visible ? 'inline' : 'none' }}
                onClick={scrollToTop}
            >
                arrow_upward
            </NavLink>

        </>
    )
}

export default GoBack
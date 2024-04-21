import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../CSS/Navbar.module.css'
import Logo from '../Assets/Logo.png'
const Navbar = () => {
    return (
        <>
            <nav className={`${styles.navbar}`}>
                <div className={`${styles.left}`}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="navigation">
                    <ul className={`${styles.nav}`}>
                        <li className={`${styles.navlinks}`}>Home</li>
                        <li className={`${styles.navlinks}`}>Find Doctors</li>
                        <li className={`${styles.navlinks}`}>Aboout Us</li>
                    </ul>
                </div>
                <div className={`${styles.right}`}>
                    <button>Login</button>
                    <button>Sign-up</button>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar

import React from 'react'
import styles from '../CSS/Header.module.css'
import Headerbg from '../Assets/Headerbg.png'
import ProfilePic from '../Assets/ProfilePic.png'
const Header = () => {
    return (
        <div className={`${styles.header}`}>
            <div className={`${styles.upper}`}>
                <img src={Headerbg} alt="" />
            </div>
            <div className={`${styles.lower}`}>
                <div className={`${styles.profile}`}>
                    <div className={`${styles.image}`}>
                        <img src={ProfilePic} alt="" />
                    </div>
                    <div className={`${styles.details}`}>
                        <h1>Dr. Bruce Wilis
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="20" fill="#4dd0e1"></circle><path fill="#fff" d="M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659l-6.083-6.084c-0.879-0.878-0.879-2.303,0-3.182 c0.878-0.879,2.304-0.879,3.182,0l6.083,6.084c0.879,0.878,0.879,2.303,0,3.182C23.643,30.47,23.067,30.69,22.491,30.69z"></path><path fill="#fff" d="M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659c-0.879-0.878-0.879-2.303,0-3.182l9.539-9.539 c0.878-0.879,2.304-0.879,3.182,0c0.879,0.878,0.879,2.303,0,3.182l-9.539,9.539C23.643,30.47,23.067,30.69,22.491,30.69z"></path>
                            </svg>
                        </h1>
                        <p>Gynecologist</p>
                        <p>4.2 ⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={`${styles.rating}`}>
                    <div>
                        <p className={`${styles.Ratingsmall}`}>Followers</p>
                        <p>850</p>
                    </div>
                    <div>
                        <p className={`${styles.Ratingsmall}`}>Following</p>
                        <p>18K</p>
                    </div>
                    <div>
                        <p className={`${styles.Ratingsmall}`}>Posts</p>
                        <p>250</p>
                    </div>
                </div>
                <div className={`${styles.button}`}>
                    <button>Book Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Header

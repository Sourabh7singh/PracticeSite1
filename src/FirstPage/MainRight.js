import React, { useState } from 'react'
import styles from '../CSS/MainRight.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainRight = () => {
    const [session,setSession]=useState(null);
    const [timings,setTimings]=useState(null);
    const [slots,setSlots]=useState(null);
    return (
        <div className={`${styles.MainRight}`}>
            <ToastContainer/>
            <div className={`${styles.Appointment}`}>
                <h2>Appointment Fee</h2>
                <p>₹699.00</p>
            </div>
            <div className={`${styles.ModeOfSession}`}>
                <div className={`${styles.ModeOfSessionheader}`}>
                    <h2>Select your mode of session <hr className={`${styles.line}`} /></h2>
                </div>
                <div className={`${styles.ModeOfSessionbody}`}>
                    <div className={`${styles.ModeOfSessionLink} ${session==="In-Clinic" && "bg-success text-light"} `} onClick={()=>setSession("In-Clinic")}>
                        <h2>In-Clinic</h2>
                        <p className={`${session==="In-Clinic" && "text-light"}`}>45 Mins</p>
                    </div>
                    <div className={`${styles.ModeOfSessionLink} ${session === "Video"&&"bg-success text-light"} `} onClick={()=>setSession("Video")}>
                        <h2>Video</h2>
                        <p className={`${session ==="Video"&&"text-light"}`}>45 Mins</p>
                    </div>
                    <div className={`${styles.ModeOfSessionLink} ${session ==="Chat"&&"bg-success text-light"} `} onClick={()=>setSession("Chat")}>
                        <h2>Chat</h2>
                        <p className={`${session ==="Chat"&&"text-light"}`}>10 Mins</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.TimeSlot}`}>
                <div className={`${styles.TimeSlotheader}`}>
                    <h2>Pick a time slot</h2>
                    <hr className={`${styles.line}`} />
                    <div className="calander">
                        <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.75 21.5C43.75 33.2307 34.0176 42.75 22 42.75C9.98236 42.75 0.25 33.2307 0.25 21.5C0.25 9.76934 9.98236 0.25 22 0.25C34.0176 0.25 43.75 9.76934 43.75 21.5Z" fill="white" stroke="#8A8A8A" strokeWidth="0.5" />
                            <path d="M30 13H16C14.8954 13 14 13.8954 14 15V29C14 30.1046 14.8954 31 16 31H30C31.1046 31 32 30.1046 32 29V15C32 13.8954 31.1046 13 30 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M27 11V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 11V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 19H32" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className={`${styles.TimeSlotbody}`}>
                    <div className={`${styles.TimeSlotLink} ${slots==="Monday, 10 Oct" && "bg-success text-light"}`} onClick={()=>setSlots("Monday, 10 Oct")}>
                        <h2>Monday, 10 Oct</h2>
                        <p className={`${slots==="Monday, 10 Oct" && "text-light"}`}>10 slots</p>
                    </div>
                    <div className={`${styles.TimeSlotLink} ${slots==="Tuesday, 11 Oct" && "bg-success text-light"}`} onClick={()=>setSlots("Tuesday, 11 Oct")}>
                        <h2>Tuesday, 11 Oct</h2>
                        <p className={`${slots==="Tuesday, 11 Oct" && "text-light"}`}>02 slots</p>
                    </div>
                    <div className={`${styles.TimeSlotLink} ${slots==="Wednesday, 12 Oct" && "bg-success text-light"}`} onClick={()=>setSlots("Wednesday, 12 Oct")}>
                        <h2>Wednesday, 12 Oct</h2>
                        <p className={`${slots==="Wednesday, 12 Oct" && "text-light"}`}>05 slots</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.Timings}`}>
                <div className={`${styles.Morning}`}>
                    <div className={`${styles.header}`}>
                        <h2>Morning</h2>
                    </div>
                    <div className={`${styles.slots}`}>
                        <span className={`${styles.capsule} ${timings==="09:00 AM" && "bg-success text-light"}`} onClick={()=>setTimings("09:00 AM")}>09:00 AM</span>
                        <span className={`${styles.capsule} ${timings==="09:30 AM" && "bg-success text-light"}`} onClick={()=>setTimings("09:30 AM")}>09:30 AM</span>
                        <span className={`${styles.capsule} ${timings==="10:00 AM" && "bg-success text-light"}`} onClick={()=>setTimings("10:00 AM")}>10:00 AM</span>
                        <span className={`${styles.capsule} ${timings==="10:30 AM" && "bg-success text-light"}`} onClick={()=>setTimings("10:30 AM")}>10:15 AM</span>
                        <span className={`${styles.capsule} ${timings==="11:00 AM" && "bg-success text-light"}`} onClick={()=>setTimings("11:00 AM")}>10:45 AM</span>
                        <span className={`${styles.capsule} ${timings==="11:30 AM" && "bg-success text-light"}`} onClick={()=>setTimings("11:30 AM")}>11:00 AM</span>
                    </div>
                </div>
                <div className={`${styles.Morning}`}>
                    <div className={`${styles.header}`}>
                        <h2>Evening</h2>
                    </div>
                    <div className={`${styles.slots}`}>
                        <span className={`${styles.capsule} ${timings==="04:00 PM" && "bg-success text-light"}`} onClick={()=>setTimings("04:00 PM")}>04:00 PM</span>
                        <span className={`${styles.capsule} ${timings==="04:15 PM" && "bg-success text-light"}`} onClick={()=>setTimings("04:15 PM")}>04:15 PM</span>
                        <span className={`${styles.capsule} ${timings==="04:30 PM" && "bg-success text-light"}`} onClick={()=>setTimings("04:30 PM")}>04:30 PM</span>
                        <span className={`${styles.capsule} ${timings==="04:45 PM" && "bg-success text-light"}`} onClick={()=>setTimings("04:45 PM")}>04:45 PM</span>
                        <span className={`${styles.capsule} ${timings==="05:15 PM" && "bg-success text-light"}`} onClick={()=>setTimings("05:15 PM")}>05:15 PM</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.BookingBtn}`}>
                <button className={`${styles.Booking}`} onClick={()=>{toast.success("Your Appointment has been Confirmed")}}>Make An Appointment</button>
            </div>
        </div>
    )
}

export default MainRight

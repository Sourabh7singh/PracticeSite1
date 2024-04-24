import React, { useEffect, useState } from 'react'
import styles from '../CSS/SecondPage.module.css'
import CardProfile from '../Assets/cardProfile.png'
import comment from '../Assets/comment 1.png'
import { Link } from 'react-router-dom'
const SecondPage = () => {
	const [Expertise, SetExpertise] = useState(null);
	const [Gender, setGender] = useState(null);
	const [Fees, setFees] = useState(null);
	const [Languages, setLanguages] = useState(null);
	const [AllFilters, setAllFilters] = useState(null);
	const [FilterList, setFilterList] = useState([]);
	const [selected,setSelected]=useState();
	const updateFilterList = () => {
		const filters = [Expertise, Gender, Fees, Languages, AllFilters].filter(filter => filter !== null && filter !== "");
		setFilterList(filters);
	}

	useEffect(() => {
		updateFilterList();
		// eslint-disable-next-line
	}, [Expertise, Gender, Fees, Languages, AllFilters]);

	return (
		<div className={`${styles.main}`}>
			<div className={`${styles.Mainheader}`}>
				<div className={`${styles.text}`}>
					<h2>Find Expert Doctors For An In-Clinic Session Here</h2>
				</div>
				<div className={`${styles.location}`}>
					<div className={`${styles.searchLocation}`}>
						<input type="text" placeholder="Search Location" />
						<svg width="25" height="24" viewBox="0 0 25 24" className={`${styles.LocationSvg}`} fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.2942 8.23375L14.2936 8.23315C13.8086 7.74897 13.2109 7.5 12.5273 7.5C11.8438 7.5 11.2462 7.749 10.7618 8.23345C10.2769 8.71838 10.0273 9.31621 10.0273 10C10.0273 10.6837 10.2768 11.2812 10.7618 11.7656C11.2461 12.2506 11.8437 12.5 12.5273 12.5C13.2111 12.5 13.809 12.2505 14.2939 11.7656C14.7783 11.2811 15.0273 10.6835 15.0273 10C15.0273 9.31649 14.7784 8.71874 14.2942 8.23375ZM7.27929 4.59258L7.27936 4.59251C8.79844 3.19121 10.5409 2.5 12.5273 2.5C14.5138 2.5 16.2563 3.19121 17.7753 4.59251L17.7754 4.59258C19.2663 5.96736 20.0273 7.81773 20.0273 10.2C20.0273 11.6731 19.4747 13.2999 18.3084 15.09C17.1427 16.8788 15.3634 18.839 12.9525 20.9698C12.9003 21.0124 12.835 21.0506 12.7518 21.0818C12.6707 21.1122 12.5967 21.125 12.5273 21.125C12.4579 21.125 12.3839 21.1122 12.3029 21.0818C12.2197 21.0506 12.1544 21.0124 12.1022 20.9698C9.69129 18.839 7.912 16.8788 6.74624 15.09C5.58003 13.2999 5.02734 11.6731 5.02734 10.2C5.02734 7.81773 5.78835 5.96736 7.27929 4.59258Z" fill="#3A643B" stroke="#3A643B" />
						</svg>
						<svg width="19" height="20" className={`${styles.arrow}`} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.51953 7.5L9.50151 14.1667L15.4835 7.5" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
					<div className={`${styles.name}`}>
						<input type="text" placeholder="eg. Doctor, specialisation, clinic name" />
						<svg width="29" height="24" className={`${styles.searchIcon}`} viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.8354 4L13.1811 5.41L19.7279 11H5.44922V13H19.7279L13.1811 18.59L14.8354 20L24.2215 12L14.8354 4Z" fill="#1C1B1F" />
						</svg>
					</div>
				</div>
			</div>
			<div className={`${styles.filters}`}>
				{/* <div className={`${styles.capsule}`}> */}
				<div class="dropdown">
					<button class={`btn btn-secondary dropdown-toggle text-dark ${Expertise ? "bg-success text-white" : "bg-light"}`} type="button" data-bs-theme="light" data-bs-toggle="dropdown" aria-expanded="false">
						{Expertise ? Expertise : "Expertise"}
					</button>
					<ul class="dropdown-menu">
						<li class="dropdown-item" onClick={() => { SetExpertise("Cardiology") }}>Cardiology</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Pediatrics") }}>Pediatrics</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Dermatology") }}>Dermatology</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Orthopedics") }}>Orthopedics</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Neurology") }}>Neurology</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Ophthalmology") }}>Ophthalmology</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Gynecology/Obstetrics") }}>Gynecology/Obstetrics</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Psychiatry") }}>Psychiatry</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Oncology") }}>Oncology</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Gastroenterology") }}>Gastroenterology</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Endocrinology") }}>Endocrinology</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Pulmonology") }}>Pulmonology</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Infectious") }}>Infectious Diseases</li>
						<li class="dropdown-item" onClick={() => { SetExpertise("Nephrology") }}>Nephrology</li>
					</ul>
				</div>
				<div class="dropdown">
					<button class={`btn btn-secondary dropdown-toggle text-dark ${Gender ? "bg-success text-white" : "bg-light"}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
						{Gender ? Gender : "Gender"}
					</button>
					<ul class="dropdown-menu">
						<li class="dropdown-item" onClick={() => { setGender("Male") }}>Male</li>
						<li class="dropdown-item" onClick={() => { setGender("Female") }}>Female</li>
						<li class="dropdown-item" onClick={() => { setGender("Other") }}>Other</li>
					</ul>
				</div>
				<div class="dropdown">
					<button class={`btn btn-secondary dropdown-toggle text-dark ${Fees ? "bg-success text-white" : "bg-light"}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
						{Fees ? Fees : "Fees"}
					</button>
					<ul class="dropdown-menu">
						<li class="dropdown-item" onClick={() => { setFees("Rs.0 - Rs.500") }}>Rs.0 - Rs.500</li>
						<li class="dropdown-item" onClick={() => { setFees("Rs.500 - Rs.1000") }}>Rs.500 - Rs.1000</li>
						<li class="dropdown-item" onClick={() => { setFees("Rs.1000 +") }}>Rs.1000 +</li>
					</ul>
				</div>
				<div class="dropdown">
					<button class={`btn btn-secondary dropdown-toggle text-dark ${Languages ? "bg-success text-white" : "bg-light"}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
						{Languages ? Languages : "Languages"}
					</button>
					<ul class="dropdown-menu">
						<li class="dropdown-item" onClick={() => { setLanguages("Hindi") }}>Hindi</li>
						<li class="dropdown-item" onClick={() => { setLanguages("English") }}>English</li>
						<li class="dropdown-item" onClick={() => { setLanguages("Marathi") }}>Marathi</li>
					</ul>
				</div>
				<div class="dropdown">
					<button class={`btn btn-secondary dropdown-toggle text-dark ${AllFilters ? "bg-success text-white" : "bg-light"}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
						{AllFilters ? AllFilters : "All Filters"}
					</button>
					<ul class="dropdown-menu">
						<li class="dropdown-item" onClick={() => { setAllFilters("Medical Specialities") }}>Medical Specialities</li>
						<li class="dropdown-item" onClick={() => { setAllFilters("Procedures and Treatments") }}>Procedures and Treatments</li>
						<li class="dropdown-item" onClick={() => { setAllFilters("Conditions and Diseases") }}>Conditions and Diseases</li>
						<li class="dropdown-item" onClick={() => { setAllFilters("Age Group Specialization") }}>Age Group Specialization</li>
						<li class="dropdown-item" onClick={() => { setAllFilters("Treatment Modalities") }}>Treatment Modalities</li>
						<li class="dropdown-item" onClick={() => { setAllFilters("Telemedicine Services") }}>Telemedicine Services</li>
						<li class="dropdown-item" onClick={() => { setAllFilters("Doctor's Special Interests") }}>Doctor's Special Interests</li>
					</ul>
				</div>
			</div>
			<div className={`${styles.selected}`}>
				{
					FilterList.map((item) => {
						return (
							<div className={`${styles.Selectedcapsule}`}>
								{item}
								<svg width="12" height="15" viewBox="0 0 12 15" className={`${styles.arrow}`} onClick={() => { setFilterList(FilterList.filter((e) => e !== item)) }} fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.9524 1.87522L1.04912 12.9676" stroke="#838383" strokeWidth="2" strokeLinecap="round" />
									<path d="M1.21484 1.875L10.9523 13.125" stroke="#838383" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</div>
						)
					})
				}
			</div>
			<div className={`${styles.cards}`}>
				<div className={`${styles.card}`}>
					<div className={`${styles.profileImage}`}>
						<img src={CardProfile} alt="" />
						<span className={`${styles.rating}`}>4.5⭐</span>
					</div>
					<div className={`${styles.DoctorName}`}>
						<h3>Dr. Prerna Narang</h3>
					</div>
					<div className={`${styles.qualification}`}>
						<p>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_2003_2063)">
									<path d="M7.00065 13.6673L13.6673 7.00065C13.9788 6.69537 14.2267 6.33136 14.3967 5.92967C14.5667 5.52798 14.6553 5.09658 14.6575 4.66042C14.6597 4.22426 14.5754 3.79198 14.4095 3.3886C14.2436 2.98521 13.9994 2.61871 13.691 2.3103C13.3826 2.00188 13.0161 1.75766 12.6127 1.59177C12.2093 1.42587 11.7771 1.34159 11.3409 1.34379C10.9047 1.34599 10.4733 1.43464 10.0716 1.6046C9.66995 1.77456 9.30594 2.02247 9.00065 2.33399L2.33399 9.00065C2.02247 9.30594 1.77456 9.66995 1.6046 10.0716C1.43464 10.4733 1.34599 10.9047 1.34379 11.3409C1.34159 11.7771 1.42587 12.2093 1.59177 12.6127C1.75766 13.0161 2.00188 13.3826 2.3103 13.691C2.61871 13.9994 2.98521 14.2436 3.3886 14.4095C3.79198 14.5754 4.22426 14.6597 4.66042 14.6575C5.09658 14.6553 5.52798 14.5667 5.92967 14.3967C6.33136 14.2267 6.69537 13.9788 7.00065 13.6673Z" stroke="#3A643B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M5.66797 5.6665L10.3346 10.3332" stroke="#3A643B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
								</g>
								<defs>
									<clipPath id="clip0_2003_2063">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
							Male-Female Infertility
						</p>
						<p>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 10V16M21 10L11 5L1 10L11 15L21 10Z" stroke="#3A643B" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M5 11.9985V16.9985C8 19.9985 14 19.9985 17 16.9985V11.9985" stroke="#3A643B" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							7 years of Experience
						</p>
						<p>
							<img src={comment} alt="" />
							Speaks: English, Hindi, Marathi
						</p>
					</div>
					<div className={`${styles.consultation}`}>
						<div className={`${styles.box} ${selected === 1 && 'bg-success text-white'} `} onClick={() => setSelected(1)}>
							<h2>Video Consultation</h2>
							<p className={`${selected===1&&"text-white"}`}>₹800</p>
						</div>
						<div className={`${styles.box} ${selected === 2 && 'bg-success text-white'} `} onClick={() => setSelected(2)}>
							<h2>Chat Consultation</h2>
							<p  className={`${selected===2&&"text-white"}`}>Free</p>
						</div>
					</div>
					<div className={`${styles.buttons}`}>
						<Link className={`${styles.button}`} to="/appointment">View Profile</Link>
						<Link className={`${styles.button}`} to="/appointment">Book a Consultation</Link>
					</div>
				</div>
				<div className={`${styles.card}`}>
					<div className={`${styles.profileImage}`}>
						<img src={CardProfile} alt="" />
						<span className={`${styles.rating}`}>4.5⭐</span>
					</div>
					<div className={`${styles.DoctorName}`}>
						<h3>Dr. Prerna Narang</h3>
					</div>
					<div className={`${styles.qualification}`}>
						<p>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_2003_2063)">
									<path d="M7.00065 13.6673L13.6673 7.00065C13.9788 6.69537 14.2267 6.33136 14.3967 5.92967C14.5667 5.52798 14.6553 5.09658 14.6575 4.66042C14.6597 4.22426 14.5754 3.79198 14.4095 3.3886C14.2436 2.98521 13.9994 2.61871 13.691 2.3103C13.3826 2.00188 13.0161 1.75766 12.6127 1.59177C12.2093 1.42587 11.7771 1.34159 11.3409 1.34379C10.9047 1.34599 10.4733 1.43464 10.0716 1.6046C9.66995 1.77456 9.30594 2.02247 9.00065 2.33399L2.33399 9.00065C2.02247 9.30594 1.77456 9.66995 1.6046 10.0716C1.43464 10.4733 1.34599 10.9047 1.34379 11.3409C1.34159 11.7771 1.42587 12.2093 1.59177 12.6127C1.75766 13.0161 2.00188 13.3826 2.3103 13.691C2.61871 13.9994 2.98521 14.2436 3.3886 14.4095C3.79198 14.5754 4.22426 14.6597 4.66042 14.6575C5.09658 14.6553 5.52798 14.5667 5.92967 14.3967C6.33136 14.2267 6.69537 13.9788 7.00065 13.6673Z" stroke="#3A643B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M5.66797 5.6665L10.3346 10.3332" stroke="#3A643B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
								</g>
								<defs>
									<clipPath id="clip0_2003_2063">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
							Male-Female Infertility
						</p>
						<p>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 10V16M21 10L11 5L1 10L11 15L21 10Z" stroke="#3A643B" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M5 11.9985V16.9985C8 19.9985 14 19.9985 17 16.9985V11.9985" stroke="#3A643B" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							7 years of Experience
						</p>
						<p>
							<img src={comment} alt="" />
							Speaks: English, Hindi, Marathi
						</p>
					</div>
					<div className={`${styles.consultation}`}>
						<div className={`${styles.box} ${selected === 3 && 'bg-success text-white'} `} onClick={() => setSelected(3)}>
							<h2>Video Consultation</h2>
							<p className={`${selected===3&&"text-white"}`}>₹800</p>
						</div>
						<div className={`${styles.box} ${selected === 4 && 'bg-success text-white'} `} onClick={() => setSelected(4)}>
							<h2>Chat Consultation</h2>
							<p  className={`${selected===4&&"text-white"}`}>Free</p>
						</div>
					</div>
					<div className={`${styles.buttons}`}>
						<Link className={`${styles.button}`} to="/appointment">View Profile</Link>
						<Link className={`${styles.button}`} to="/appointment">Book a Consultation</Link>
					</div>
				</div>
				<div className={`${styles.card}`}>
					<div className={`${styles.profileImage}`}>
						<img src={CardProfile} alt="" />
						<span className={`${styles.rating}`}>4.5⭐</span>
					</div>
					<div className={`${styles.DoctorName}`}>
						<h3>Dr. Prerna Narang</h3>
					</div>
					<div className={`${styles.qualification}`}>
						<p>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_2003_2063)">
									<path d="M7.00065 13.6673L13.6673 7.00065C13.9788 6.69537 14.2267 6.33136 14.3967 5.92967C14.5667 5.52798 14.6553 5.09658 14.6575 4.66042C14.6597 4.22426 14.5754 3.79198 14.4095 3.3886C14.2436 2.98521 13.9994 2.61871 13.691 2.3103C13.3826 2.00188 13.0161 1.75766 12.6127 1.59177C12.2093 1.42587 11.7771 1.34159 11.3409 1.34379C10.9047 1.34599 10.4733 1.43464 10.0716 1.6046C9.66995 1.77456 9.30594 2.02247 9.00065 2.33399L2.33399 9.00065C2.02247 9.30594 1.77456 9.66995 1.6046 10.0716C1.43464 10.4733 1.34599 10.9047 1.34379 11.3409C1.34159 11.7771 1.42587 12.2093 1.59177 12.6127C1.75766 13.0161 2.00188 13.3826 2.3103 13.691C2.61871 13.9994 2.98521 14.2436 3.3886 14.4095C3.79198 14.5754 4.22426 14.6597 4.66042 14.6575C5.09658 14.6553 5.52798 14.5667 5.92967 14.3967C6.33136 14.2267 6.69537 13.9788 7.00065 13.6673Z" stroke="#3A643B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M5.66797 5.6665L10.3346 10.3332" stroke="#3A643B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
								</g>
								<defs>
									<clipPath id="clip0_2003_2063">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
							Male-Female Infertility
						</p>
						<p>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 10V16M21 10L11 5L1 10L11 15L21 10Z" stroke="#3A643B" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M5 11.9985V16.9985C8 19.9985 14 19.9985 17 16.9985V11.9985" stroke="#3A643B" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							7 years of Experience
						</p>
						<p>
							<img src={comment} alt="" />
							Speaks: English, Hindi, Marathi
						</p>
					</div>
					<div className={`${styles.consultation}`}>
						<div className={`${styles.box} ${selected === 5 && 'bg-success text-white'} `} onClick={() => setSelected(5)}>
							<h2>Video Consultation</h2>
							<p className={`${selected===5&&"text-white"}`}>₹800</p>
						</div>
						<div className={`${styles.box} ${selected === 6 && 'bg-success text-white'} `} onClick={() => setSelected(6)}>
							<h2>Chat Consultation</h2>
							<p  className={`${selected===6&&"text-white"}`}>Free</p>
						</div>
					</div>
					<div className={`${styles.buttons}`}>
						<Link className={`${styles.button}`} to="/appointment">View Profile</Link>
						<Link className={`${styles.button}`} to="/appointment">Book a Consultation</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecondPage

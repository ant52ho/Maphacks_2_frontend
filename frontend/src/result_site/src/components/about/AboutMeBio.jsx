import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { InfoContext } from '../../../..';
import { useLocation } from "react-router-dom"

import React from 'react';


const AboutMeBio = ({image, text}) => {
	const { aboutMe } = useContext(AboutMeContext);

	const { state } = useLocation(); // state is any or unknown
	const {info, setInfo} = React.useContext(InfoContext)

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				{/* <img src={profileImage} className="rounded-lg w-96" alt="" /> */}
				<img src={image} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{/* {aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))} */}
				<br/>
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
					{text.trim()}{"."}
					<br/>
					<br/>
					{(info && info.summary) || (state && state.summary) || ""}
				</p>
			</div>
		</div>
	);
};

export default AboutMeBio;

import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import React from 'react';
import { InfoContext } from '../../..';
import { useContext } from 'react';
import { useLocation } from "react-router-dom"

const Contact = () => {

	const { state } = useLocation(); // state is any or unknown
	const {info, setInfo} = React.useContext(InfoContext)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
			<ContactForm />
			<ContactDetails 
				location = "nowhere" 
				email = {info && info.email || state && state.email || "[Don't email me]"}
				phone = {info && info.telephone || state && state.telephone || "[Don't call me]"}
			/>
		</motion.div>
	);
};

export default Contact;

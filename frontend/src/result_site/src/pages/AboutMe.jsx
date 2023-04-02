import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom"

const About = ({bioImage="Hello", bioText="World"}) => {

	const { state } = useLocation(); // state is any or unknown
	console.log(state)

	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio image={bioImage} text={state.aspiration}/>
			</motion.div>

			{/** Counter without paddings */}
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div> */}

			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div> */}
		</AboutMeProvider>
	);
};

export default About;

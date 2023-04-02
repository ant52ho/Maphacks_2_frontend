import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import WebImage2 from '../../images/web-project-2.jpg';
import MobileImage2 from '../../images/mobile-project-2.jpg';
import UIImage1 from '../../images/ui-project-1.jpg';
import { useLocation } from 'react-router-dom';	

const ProjectsGrid = (props) => {
	const {
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	const { state } = useLocation(); // state is any or unknown
	const {info, setInfo} = React.useContext(InfoContext)

	// const projects = [
	// 	{
	// 		id: 1,
	// 		title: 'Ket',
	// 		category: 'Web Application',
	// 		img: WebImage2,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Phoenix Digital Agency',
	// 		category: 'Mobile Application',
	// 		img: MobileImage2,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Project Management UI',
	// 		category: 'UI/UX Design',
	// 		img: UIImage1,
	// 	},
	// ];

	let projectNames = (info && info.projects) || (state && state.projects) || null
	let projectImages = projectNames && (info && info.projectImages) || (state && state.projectImages) || null

	let projects = projectNames && projectImages && projectNames.map(
		(name, index) => {
			return {
				id: index,
				title: name,
				category: "Misc. Project",
				img: projectImages[index].data[0].url,
			}
		}
	)


	

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Search projects by title or filter by category
				</h3>
				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{selectProject
					? selectProjectsByCategory.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))
					: searchProject
					? searchProjectsByTitle.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))
					: projects.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ProjectsGrid;

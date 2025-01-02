import React from "react";

// Import images
import chefGemini from "../assets/chef-gemini.png";
import pythonWebCrawler from "../assets/Python-Web-Crawler.jpg";
import javaWebCrawler from "../assets/java-web-crawler.png";
import enchantedParticles from "../assets/Enchanted-Particles.png";
import byzantineColorPalette from "../assets/Byzantine-Color-Palette.png";
import myTravelJournal from "../assets/my-travel-journal.png";

function Projects() {
	const projects = [
		{
			title: "Recipe Generator with Gemini",
			type: "Personal Project",
			date: "Mar 2024",

			tech: "React, Google Gemini API, CSS",
			description:
				"An AI-powered recipe generator that creates unique recipes based on available ingredients. Built with React and integrated with Google's Gemini AI for intelligent recipe suggestions.",
			image: chefGemini,
			links: {
				github: "https://github.com/EthanLi0316/recipe-generator-gemini",
				live: "https://chef-gemini.netlify.app/",
			},
		},
		{
			title: "Python Web Crawler",
			type: "Course Project",
			date: "Sept 2023 – Dec 2023",
			tech: "Python",
			description:
				"A web crawler optimized for minimal runtime complexity, using os and Json modules for efficient data handling.",
			image: pythonWebCrawler,
			links: {
				github: "https://github.com/EthanLi0316/python-web-crawler",
			},
		},
		{
			title: "Java Web Crawler",
			type: "Course Project",
			date: "Sept 2023 – Dec 2023",
			tech: "Java, JavaFX",
			description:
				"Translated a Python web crawler into Java, adding a user-friendly GUI with JavaFX. Improved data storage using Java serialization and addressed a circular-reference problem by optimizing object compositions.",
			image: javaWebCrawler,
			links: {
				github: "https://github.com/EthanLi0316/java-web-crawler",
			},
		},
		{
			title: "Enchanted Particles",
			type: "Hackathon Project",
			date: "27-29, Sep 2024",
			tech: "Python, Intel Quartus, Verilog, FPGA",
			description:
				"An animation of moving cubes inspired by the classic DVD logo, built using Python, Verilog, and Intel Quartus on Ultrix platform by Ross Video.",
			image: enchantedParticles,
			links: {
				github: "https://github.com/Cyronite/HackTheHill",
				demo: "https://devpost.com/software/entropy-2",
			},
		},
		{
			title: "Byzantine Color Palette",
			type: "Personal Project",
			date: "Dec 2024",

			tech: "React, CSS",
			description:
				"A color palette inspired by Byzantine art. It allows users to interact with Byzantine colors",
			image: byzantineColorPalette,
			links: {
				github: "https://github.com/EthanLi0316/byzantine-color-palette",
				live: "https://byzantine-color-palette.netlify.app/",
			},
		},
		{
			title: "My Travel Journal",
			type: "Personal Project",
			date: "Dec 2024",
			tech: "React, CSS",
			description:
				"A responsive travel journal showcasing Ottawa landmarks. Features location entries with Google Map links and descriptions of visited places.",
			image: myTravelJournal,
			links: {
				github: "https://github.com/EthanLi0316/my-travel-journal",
				live: "https://ethan-my-travel-journal.netlify.app/",
			},
		},
	];

	return (
		<main className="main-content">
			<div className="container">
				<h2 className="section-title">My Projects</h2>
				<div className="projects-grid">
					{projects.map((project, index) => (
						<div key={index} className="project-card">
							<div className="project-image">
								<img src={project.image} alt={project.title} />
								<div className="project-links">
									{project.links.github && (
										<a
											href={project.links.github}
											target="_blank"
											rel="noopener noreferrer"
											className="project-link"
										>
											GitHub
										</a>
									)}
									{project.links.demo && (
										<a
											href={project.links.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="project-link"
										>
											Devpost
										</a>
									)}
									{project.links.live && (
										<a
											href={project.links.live}
											target="_blank"
											rel="noopener noreferrer"
											className="project-link"
										>
											Live
										</a>
									)}
								</div>
							</div>
							<div className="project-content">
								<div className="project-header">
									<h3 className="project-title">
										{project.title}
									</h3>
									<p className="project-type">
										{project.type}
									</p>
								</div>
								<div className="project-meta">
									<span className="project-date">
										{project.date}
									</span>
									<span className="project-tech">
										{project.tech}
									</span>
								</div>
								<p className="project-description">
									{project.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export default Projects;

import React from "react";

function Resume() {
	return (
		<main className="main-content">
			<div className="container">
				<h2 className="section-title">Education</h2>
				<div className="resume-section">
					<h3 className="institution">
						Carleton University
						<span className="degree-date">
							(present- April 2028)
						</span>
					</h3>
					<p className="degree">
						<strong>
							Bachelor of Computer Science Honours CO-OP
						</strong>
					</p>
					<ul className="education-list">
						<li>
							Second year standing, <strong>Major</strong> CGPA:
							10/12 (A-), <strong>Overall</strong> CGPA: 10.33/12
							(A-)
						</li>
						<li>
							<strong>CO-OP Availability: 16/ 12/ 8/ 4</strong>{" "}
							months
						</li>
					</ul>
				</div>

				<h2 className="section-title">Projects</h2>
				<div className="projects-section">
					<div className="project">
						<h3>
							<span className="project-title">
								<a
									href="https://devpost.com/software/entropy-2"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>
										Enchanted Particles (Hackathon Project)
									</strong>
								</a>
								{" | Python, Intel Quartus, Verilog, FPGA"}
							</span>
							<span className="project-date">
								27-29, Sep 2024
							</span>
						</h3>
						<ul>
							<li>
								Developed an animation of moving cubes inspired
								by the classic DVD logo. Enhanced{" "}
								<strong>low-level programming</strong> skills by
								using <strong>Python, Verilog</strong>, and{" "}
								<strong>Intel Quartus</strong> on Ultrix
								platform by Ross Video.
							</li>
							<li>
								Implemented a Python script to convert RGB
								images to a 10-bit YCbCr format for{" "}
								<strong>image processing compatibility</strong>{" "}
								with the <strong>FPGA</strong>.
							</li>
							<li>
								Developed a <strong>Verilog</strong> module to
								determine <strong>point inclusion</strong>{" "}
								within a square, which provides color and state
								flags for <strong>particle rendering</strong>.
							</li>
						</ul>
					</div>

					<div className="project">
						<h3>
							<span className="project-title">
								<a
									href="https://recipe-generator-gemini.vercel.app"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>
										Recipe Generator with Gemini
									</strong>
								</a>
								{" | React, Google Gemini API, CSS"}
							</span>
							<span className="project-date">Mar 2024</span>
						</h3>
						<ul>
							<li>
								Developed an AI-powered recipe generator that
								creates unique recipes based on available
								ingredients using React and Google's Gemini AI.
							</li>
							<li>
								Implemented real-time ingredient management and
								recipe generation with modern React practices.
							</li>
						</ul>
					</div>

					<div className="project">
						<h3>
							<span className="project-title">
								<a
									href="https://github.com/EthanLi0316/python-crawler"
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>Python Web Crawler</strong>
								</a>
								{" | Python"}
							</span>
							<span className="project-date">
								Sept 2023 – Dec 2023
							</span>
						</h3>
						<ul>
							<li>
								Engineered a Python-based web crawler focused on
								minimizing runtime complexity, leveraging os and
								Json modules for efficient data handling and
								reduced I/O operations.
							</li>
							<li>
								Enhanced search efficiency through preprocessing
								for word frequency analysis and PageRank
								algorithm optimizations.
							</li>
						</ul>
					</div>
				</div>

				<h2 className="section-title">Extra-Curricular Activities</h2>
				<div className="activities-section">
					<h3>
						<a
							href="https://2024.hackthehill.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<strong>Hack The Hill Hackathon 2024</strong>
						</a>
						<span className="activity-date">27-29, Sep 2024</span>
					</h3>
					<ul>
						<li>
							<strong>Collaborated in a team</strong> to create a
							video project using <strong>FPGA</strong> technology
							for the Ross Video challenge at Hack The Hill{" "}
							<strong>Hackathon</strong>.
						</li>
						<li>
							Engaged in a <strong>fast-paced</strong>,{" "}
							<strong>collaborative</strong> environment by
							utilizing <strong>problem-solving</strong> and{" "}
							<strong>teamwork</strong> skills.
						</li>
					</ul>
				</div>

				<h2 className="section-title">Skills</h2>
				<div className="skills-section">
					<p>
						<strong>Programming Languages:</strong> Python, C, C++,
						Java, JavaScript, PHP, SQL
					</p>
					<p>
						<strong>Technologies:</strong> HTML, CSS, Bootstrap,
						MySQL
					</p>
					<p>
						<strong>Development:</strong> Linux, VS code, IntelliJ,
						Git
					</p>
				</div>

				<h2 className="section-title">Work Experience</h2>
				<div className="work-section">
					<h3>
						<strong>McDonald's / Crew Member</strong>
						<span className="work-date">2022 – 2023</span>
					</h3>
					<p>
						Engaged in cooking and preparation tasks, learnt skills
						in collaboration and time management.
					</p>
				</div>
			</div>
		</main>
	);
}

export default Resume;

import React from "react";

function Home() {
	return (
		<main className="main-content">
			<div className="container">
				<h2 className="section-title">About Me</h2>

				<div className="profile-section">
					<div className="profile-info">
						<h1 className="profile-name">Ethan Li</h1>
						<p className="profile-location">Ottawa, Ontario</p>
						<div className="profile-links">
							<a
								href="https://devpost.com/lijiayi0316"
								target="_blank"
								rel="noopener noreferrer"
							>
								Devpost
							</a>
							{" | "}
							<a
								href="https://github.com/EthanLi0316"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
							{" | "}
							<a
								href="https://www.linkedin.com/in/ethan-li-68a8151a8/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</div>
						<p className="profile-contact">
							<a href="mailto:ethanli5@cmail.carleton.ca">
								ethanli5@cmail.carleton.ca
							</a>{" "}
							| 343-998-6939
						</p>
						<p className="profile-description">
							I am a Computer Science Honours CO-OP student at{" "}
							<a
								href="https://carleton.ca/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Carleton University
							</a>
							, currently maintaining an A- average with a Major
							CGPA of 10/12 and Overall CGPA of 10.33/12. I'm
							passionate about computer science and willing to
							learn new technologies.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;

import React from "react";
import reactLogo from "../assets/react.svg";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<img src={reactLogo} className="react-logo" alt="React Logo" />
				<p>
					A personal page of{" "}
					<a
						href="https://github.com/EthanLi0316"
						target="_blank"
						rel="noopener noreferrer"
						className="creator-name"
					>
						Ethan Li
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;

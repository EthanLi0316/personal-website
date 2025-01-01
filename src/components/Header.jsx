import React from "react";
import reactLogo from "../assets/react.svg";

function Header({ currentPage, setCurrentPage }) {
	return (
		<header className="nav-bar">
			<div className="nav-content">
				<div className="nav-brand">
					<img
						src={reactLogo}
						className="nav-logo"
						alt="React Logo"
					/>
					<a
						href="#"
						className="brand-name"
						onClick={e => {
							e.preventDefault();
							setCurrentPage("home");
						}}
					>
						Ethan Li
					</a>
				</div>
				<nav className="nav-menu">
					<a
						href="#"
						className={`nav-link ${
							currentPage === "home" ? "active" : ""
						}`}
						onClick={e => {
							e.preventDefault();
							setCurrentPage("home");
						}}
					>
						Home
					</a>
					<a
						href="#"
						className={`nav-link ${
							currentPage === "resume" ? "active" : ""
						}`}
						onClick={e => {
							e.preventDefault();
							setCurrentPage("resume");
						}}
					>
						Resume
					</a>
					<a
						href="#"
						className={`nav-link ${
							currentPage === "projects" ? "active" : ""
						}`}
						onClick={e => {
							e.preventDefault();
							setCurrentPage("projects");
						}}
					>
						Projects
					</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;

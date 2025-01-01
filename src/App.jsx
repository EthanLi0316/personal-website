import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
	const [currentPage, setCurrentPage] = useState("home");

	const renderPage = () => {
		switch (currentPage) {
			case "resume":
				return <Resume />;
			case "projects":
				return <Projects />;
			default:
				return <Home />;
		}
	};

	return (
		<div className="app">
			<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
			{renderPage()}
			<Footer />
		</div>
	);
}

export default App;

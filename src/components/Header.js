import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;

            default:
                return <About />;
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a
                        className="navbar-item"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/KvnHunt?tab=repositories"
                    >
                        <span className="content is-large">Kevin Michael Hunt</span>
                    </a>
                </div>
            </nav>
            {/* Pass the state value and the setter as props to NavTabs */}
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/* Call the renderPage function passing in the currentPage */}
            <main>
                <div>{renderPage()}</div>
            </main>
        </div>
    );
}

export default Header;
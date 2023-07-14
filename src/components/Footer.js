import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="p-4 mb-3">
            <div className="footer-container mx-auto d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                <nav className="navbar footer-links pt-0 pb-3 pb-lg-0 order-lg-1">
                    <div className="container-fluid pe-lg-0">
                        <ul className="navbar-nav d-flex flex-column flex-sm-row mx-auto">
                            <li className="nav-item my-2 px-2 px-md-3">
                                <NavLink className="nav-link py-0" to="about">About</NavLink>
                            </li>
                            <li className="nav-item my-2 px-2 px-md-3">
                                <NavLink className="nav-link py-0" to="privacy">Privacy Policy</NavLink>
                            </li>
                            <li className="nav-item my-2 px-2 px-md-3">
                                <NavLink className="nav-link py-0" to="terms">Terms of Use</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="footer-copy px-3 order-lg-0">&copy; 2023 DAILY NEWS</div>
            </div>
        </footer>
    );
}

export default Footer;

import { Link } from "react-router-dom";
import logo from "../images/news-logo.png";

function Nav({ searchParams, setSearchParams }) {
    const catFilter = searchParams.get("cat");

    return (
        <nav className="navbar header-nav navbar-expand-lg border-bottom sticky-top" aria-label="site navigation">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex ps-4 ps-lg-1 mx-auto flex-grow-5 flex-lg-grow-0" to="/news">
                    <img className="me-2" src={logo} width="25" alt="News" />
                    <div>DAILY NEWS</div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#newsNav" aria-controls="newsNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg className="ham ham6" viewBox="0 0 100 100" width="40">
                        <path className="line top"
                            d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
                        <path className="line middle"
                            d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
                        <path className="line bottom"
                            d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
                    </svg>
                </button>
                <div className="nav-links mt-2 mt-lg-0 justify-content-lg-end collapse navbar-collapse" id="newsNav">
                    <div className="navbar-nav">
                        <div className="nav-link-container"><Link className={`nav-link ${catFilter === "technology" ? "active" : ""}`} to="/news?cat=technology">Technology</Link></div>
                        <div className="nav-link-container"><Link className={`nav-link ${catFilter === "entertainment" ? "active" : ""}`} to="/news?cat=entertainment">Entertainment</Link></div>
                        <div className="nav-link-container"><Link className={`nav-link ${catFilter === "health" ? "active" : ""}`} to="/news?cat=health">Health</Link></div>
                        <div className="nav-link-container"><Link className={`nav-link ${catFilter === "business" ? "active" : ""}`} to="/news?cat=business">Business</Link></div>
                        <div className="nav-link-container"><Link className={`nav-link ${catFilter === "politics" ? "active" : ""}`} to="/news?cat=politics">Politics</Link></div>
                        <div className="nav-link-container"><Link className={`nav-link ${catFilter === "sports" ? "active" : ""}`} to="/news?cat=sports">Sports</Link></div>
                        <div className="nav-link-container"><Link className={`nav-link ${catFilter === "science" ? "active" : ""}`} to="/news?cat=science">Science</Link></div>
                        <div className="nav-link-container"><Link className={`nav-link ${catFilter === "world" ? "active" : ""}`} to="/news?cat=world">World</Link></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

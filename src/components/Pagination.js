
function Pagination({ articlesPerPage, count, showPage, setSearchParams }) {
    const currentPage = showPage;
    const totalPages = Math.ceil((count - 1) / articlesPerPage);
    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);
    let showNumbers = 5;
    
    if (window.innerWidth < 320) {
        showNumbers = 4;
    } else if (window.innerWidth > 575) {
        showNumbers = 9;
    } else if (window.innerWidth > 499 && window.innerWidth <= 575 ) {
        showNumbers = 7;
    } else {
        showNumbers = 5;
    }

    let pagesStart = 0;
    let pagesEnd = showNumbers;

    function nextPage() {
        let tempPage = currentPage;
        if (currentPage !== totalPages) {
            tempPage = currentPage + 1;
        }
        updatePage(tempPage);
    }

    function prevPage() {
        let tempPage = currentPage;
        if (currentPage !== 1) {
            tempPage = currentPage - 1;
        }
        updatePage(tempPage);
    }

    function updatePage(page) {
        setSearchParams((prevParams) => {
            const oldParams = prevParams;
            if (page === 1) {
                oldParams.delete("page");
            } else {
                oldParams.set("page", page);
            }
            return oldParams;
        });
    }

    if (pageNumbers.length > showNumbers) {
        if (currentPage <= Math.ceil(showNumbers / 2)) {
            pagesStart = 0;
            pagesEnd = showNumbers;
        } else if (currentPage >= (totalPages - Math.ceil(showNumbers / 2))) {
            pagesEnd = totalPages + 1;
            pagesStart = pagesEnd - (showNumbers + 1);
        } else if (currentPage > 3 && currentPage <= (totalPages - Math.floor(showNumbers / 2))) {
            pagesStart = currentPage - Math.ceil(showNumbers / 2);
            pagesEnd = currentPage + Math.floor(showNumbers / 2);
        }
    }

    const pageElements = pageNumbers.slice(pagesStart, pagesEnd).map((pgNumber, index) => (
        <li key={pgNumber} className={`page-item pgbtn-${index} ${(currentPage === pgNumber || showPage === pgNumber) ? "active" : ""}`}>
            <span className="page-link" onClick={() => updatePage(pgNumber)}>{pgNumber}</span>
        </li>
    ));

    return (
        <div>
            <nav aria-label="page navigation">
                {totalPages > 1 && <ul className="pagination justify-content-center">
                    <li className={`page-item prev ${(currentPage === 1 || showPage === 1) ? "disabled" : ""}`}>
                        <span className="page-link" onClick={prevPage} aria-label="Previous">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </span>
                    </li>
                    {pageElements && pageElements}
                    <li className={`page-item next ${(currentPage === pageNumbers.length || showPage === pageNumbers.length) ? "disabled" : ""}`}>
                        <span className="page-link" onClick={nextPage} aria-label="Next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        </span>
                    </li>
                </ul>}
                {(currentPage && totalPages > 1) && <div className="current-page d-flex justify-content-center"><div>{currentPage} &nbsp;of&nbsp; {totalPages}</div></div>}
            </nav>
        </div>
    );
}

export default Pagination;

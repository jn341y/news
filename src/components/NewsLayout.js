import { useEffect } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function ScrollToTop() {
    const [urlParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [urlParams, location]);
}

function NewsLayout() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <Header searchParams={searchParams} setSearchParams={setSearchParams} />
            <main className="py-4">
                <Outlet context={[searchParams, setSearchParams]} />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default NewsLayout;

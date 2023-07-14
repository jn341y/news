import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsLayout from "./components/NewsLayout";
import Articles from "./components/Articles";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/news" element={<NewsLayout />}>
                    <Route index element={<Articles />} />
                    <Route path="about" element={<About />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

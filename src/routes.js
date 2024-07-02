import ComponentMenu from "components/ComponentMenu";
import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import About from "pages/About";
import Begin from "pages/Begin";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <ComponentMenu/>
                <Routes>
                    <Route path="/" element={<DefaultPage/>} >
                        <Route index element={<Begin/>}/>
                        <Route path="cardapio" element={<Menu/>}/>
                        <Route path="sobre" element={<About/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
}
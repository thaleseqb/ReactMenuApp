import Begin from "pages/Begin";
import Menu from "pages/Menu";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Begin/>} />
                <Route path="/cardapio" element={<Menu/>}/>
            </Routes>
        </Router>
    );
}
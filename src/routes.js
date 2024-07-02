import ComponentMenu from "components/ComponentMenu";
import DefaultPage from "components/DefaultPage";
import Begin from "pages/Begin";
import Menu from "pages/Menu";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function AppRouter() {
    return (
        <main>
            <Router>
                <ComponentMenu/>
                <Routes>
                    <Route path="/" element={<DefaultPage/>} >
                        <Route index element={<Begin/>}/>
                        <Route path="cardapio" element={<Menu/>}/>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}
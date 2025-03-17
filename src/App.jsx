import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/test.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={Test()} />
                <Route path="/home" element={Home()} />
            </Routes>
        </Router>
    )
}



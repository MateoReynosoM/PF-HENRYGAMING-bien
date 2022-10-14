import { Routes, Route, Outlet, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import styles from "./App.css";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    );
}

export default App;

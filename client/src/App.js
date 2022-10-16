import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NavBar from "./components/Navbar";
//import styles from "./App.css";
import Form from "./pages/ProductForm";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/" element={<NavBar />}>
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
                <Route path="/newProduct" element={<Form />}/>
            </Route>
        </Routes>
    );
}

export default App;

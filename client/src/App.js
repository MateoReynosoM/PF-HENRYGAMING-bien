import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NavBar from "./components/Navbar";
import styles from "./App.css";
import Form from "./pages/ProductForm";
import { useState } from "react";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
                path="/"
                element={
                    <div className="d-flex flex-column" id="layoutContainer">
                        <NavBar pagination={pagination} />
                        <Footer />
                    </div>
                }
            >
                <Route
                    path="/products"
                    element={
                        <Products
                            currentPage={currentPage}
                            pagination={pagination}
                        />
                    }
                />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate replace to="/products" />} />
                <Route path="/newProduct" element={<Form />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
}

export default App;

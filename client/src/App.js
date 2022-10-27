import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NavBar from "./components/Navbar";
import Form from "./pages/ProductForm";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Contact from "./pages/Contact Us";
import User from "./pages/UserProfile";
import Cart from "./pages/Cart/Cart";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import AboutUs from "./pages/About Us/AboutUs";
import FAQs from "./pages/FAQs/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import styles from "./App.css";
import Success from "./pages/Checkout/Success";
import Failiure from "./pages/Checkout/Failiure";
import Pending from "./pages/Checkout/Pending";


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
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate replace to="/products" />} />
                <Route path="/newProduct" element={<Form />} />
                <Route path="/user" element={<User />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/faqs" element={<FAQs />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/">
                <Route path="/purchaseSuccess" element={<Success />} />
                <Route path="/purchaseFailiure" element={<Failiure />} />
                <Route path="/purchasePending" element={<Pending />} />
            </Route>
        </Routes>
    );
}

export default App;

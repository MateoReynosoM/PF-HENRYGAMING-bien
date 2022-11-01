import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Favorites from "./pages/Favorites";
import SidebarComponent from "./components/Sidebar";
import AdminDashboard from "./pages/Admin";
import ProductsDashboard from "./pages/Admin/ProductsDashboard";
import UsersDashboard from "./pages/Admin/UsersDashboard";
import { useLazyVerifyAdminQuery } from "./redux/rtk-api";
import { useDispatch, useSelector } from "react-redux";
import { isAdmin, setToken } from "./redux/actions";

function App() {
    const dispatch = useDispatch();
    const savedToken = useSelector((state) => state.main.token);
    const [verifyAdmin] = useLazyVerifyAdminQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    useEffect(() => {
        const adminCheck = async () => {
            const result = await verifyAdmin();
            if (!result.error) {
                dispatch(isAdmin(result.data));
                sessionStorage.setItem("admin", result.data);
            }
        };
        adminCheck();
    }, [savedToken, dispatch]);

    useEffect(() => {
        const userToken = sessionStorage.getItem("token");
        console.log(userToken);
        if (userToken) dispatch(setToken(userToken));
    }, [dispatch]);

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
                <Route path="/user" element={<User />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/favorites" element={<Favorites />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/">
                <Route path="/purchaseSuccess" element={<Success />} />
                <Route path="/purchaseFailiure" element={<Failiure />} />
                <Route path="/purchasePending" element={<Pending />} />
            </Route>
            <Route
                path="/"
                element={
                    <div className="d-flex sidebarContainer">
                        <SidebarComponent />
                    </div>
                }
            >
                <Route path="/newProduct" element={<Form />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<UsersDashboard />} />
                <Route path="/admin/products" element={<ProductsDashboard />} />
            </Route>
        </Routes>
    );
}

export default App;

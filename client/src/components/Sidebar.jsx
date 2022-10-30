import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import {BiMenu, BiHome} from "react-icons/bi"
import {IoMdAdd} from "react-icons/io"
import {FiUsers} from "react-icons/fi"
import {AiOutlineBarChart} from "react-icons/ai"
import styles from "./styles/Sidebar.css"

function SidebarComponent() {
    const dispatch = useDispatch()
    const [sidebar, setSidebar] = useState("")
    const [active, setActive] = useState("")
    const handleSidebar = () => {
        const openOrClose = sidebar === "open" ? "" : "open"
        setSidebar(openOrClose)
        return openOrClose
    }
    const handleActive = (e) => {
        const activeTab = e.currentTarget.name
        setActive(activeTab)
    }
    /* const handleTheme = () => {
        dispatch(changeTheme())
    } 
     const theme = useSelector(state => state?.theme) */
    return (
        <>
            <div className="mainSidebar">
                <aside className={`sidebar ${sidebar}`}>
                    <div className="top-sidebar">
                        <a href="#" className="brand-logo"><img src="logo.png" alt="Brand"/></a>
                        <div className="hidden-sidebar welcome-message">Welcome, admin</div>
                    </div>
                    <div className="middle-sidebar">
                        <ul className="sidebar-list">
                            <li className='sidebar-list-item'>
                                <button className='sidebar-link menu' onClick={handleSidebar}>
                                    <BiMenu className="sidebar-icon"/>
                                    <div className="hidden-sidebar"><span>Collapse Sidebar</span></div>
                                    <p className="hover">Collapse Sidebar</p>
                                </button>
                            </li>
                            <li className={`sidebar-list-item ${active === "home" && "active"}`}>
                                <Link to="/admin" className="sidebar-link" name="home" onClick={handleActive}>
                                    <BiHome className="sidebar-icon"/>
                                    <div className="hidden-sidebar"><span>Go Back Home</span></div>
                                    <p className="hover">Home</p>
                                </Link>
                            </li>
                            <li className={`sidebar-list-item ${active === "add" && "active"}`}>
                                <Link to="/newProduct" className="sidebar-link" name="add" onClick={handleActive}>
                                    <IoMdAdd className="sidebar-icon"/>
                                    <div className="hidden-sidebar"><span>Add a New Product</span></div>
                                    <p className="hover">Add a New Product</p>
                                </Link>
                            </li>
                            <li className={`sidebar-list-item ${active === "users" && "active"}`}>
                                <Link to="/users" className="sidebar-link" name="users" onClick={handleActive}>
                                    <FiUsers className="sidebar-icon"/>
                                    <div className="hidden-sidebar"><span>Users</span></div>
                                    <p className="hover">Users</p>
                                </Link>
                            </li>
                            <li className={`sidebar-list-item ${active === "charts" && "active"}`}>
                                <Link to="/charts" className="sidebar-link" name="charts" onClick={handleActive}>
                                    <AiOutlineBarChart className="sidebar-icon"/>
                                    <div className="hidden-sidebar"><span>Charts</span></div>
                                    <p className="hover">Charts</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-sidebar">
                        <ul className="sidebar-list">
                            <li className="sidebar-list-item">
                                {/* <div className="sidebar-link" onClick={handleTheme}>
                                    {theme === "dark" ?  <MoonIcon className="sidebar-icon"/> : <SunIcon className="sidebar-icon"/>}
                                    <div className="hidden-sidebar"><p>Change Theme</p></div>
                                    <p className="hover">Change Theme</p>
                                </div> */}
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}

export default SidebarComponent
import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/icons/iconizer-logo blog task.svg";
import Popup from "./PopUp";
import Cookies from "js-cookie";
import axios from "axios";
import {IoIosCloseCircle} from "@react-icons/all-files/io/IoIosCloseCircle";

const Header = () => {
    const token = Cookies.get("blog-app-session-token");
    const navigate = useNavigate();
    const [authorised, setAuthorised] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const handleClick = (link) => {
        if (!token) {
            setAuthorised(true);
        } else {
            navigate(link);
        }
        setIsSideMenuOpen(false)
    };

    const handleClose = () => {
        setAuthorised(false);
    };

    const handleLogout = async () => {
        try {
            const response = await axios.post("http://localhost/api/v1/user/logout", {
                token: token,
            }, {
                headers: {
                    "Authorization": token
                }
            });
            if (response.data.status === 201) {
                Cookies.remove('blog-app-session-token');
                navigate("/login");
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="w-full flex py-3 justify-center shadow-md">
            <Popup isOpen={authorised} onClose={handleClose}/>
            <div className="container flex items-center justify-between">
                {/* Logo and Burger Menu */}
                <div className="flex items-center space-x-4 ml-3 md:ml-0">
                    <img src={logo} className="max-w-9" alt=""/>
                    <h1 className="text-xl font-semibold">Blog that</h1>
                </div>
                <FaBars className="md:hidden text-xl cursor-pointer mr-3" onClick={() => setIsSideMenuOpen(true)} />
                {/* Main Navigation Links */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                        <p className="cursor-pointer" onClick={() => handleClick("/comments")}>My Comments</p>
                        <p className="cursor-pointer" onClick={() => handleClick("/my")}>My blogs</p>
                        <p className="cursor-pointer" onClick={() => handleClick("/new")}>Add new</p>
                        <NavLink to={"/"}>
                            <p>Blogs</p>
                        </NavLink>
                    </div>
                    {/* Conditional Login/Logout Button */}
                    {token ?
                        <button className="main-btn py-1 px-2 text-white" onClick={handleLogout}>Logout</button> :
                        <button className="main-btn py-1 px-2 text-white"
                                onClick={() => navigate("/login")}>Login</button>
                    }
                </div>
            </div>
            {/* Side Menu (Mobile Only) */}
            {isSideMenuOpen && (
                <div className="fixed inset-0 bg-white z-50">
                    <div className="flex flex-col h-full w-full">
                        <div className="flex flex-col justify-between px-4 h-full w-full p-2">
                            <div className="flex flex-col w-full space-y-5">
                                <div className="w-full items-center flex my-4 justify-between">
                                    <div className="flex items-center space-x-4">
                                        <img src={logo} className="max-w-9" alt=""/>
                                        <h1 className="text-xl font-semibold">Blog that</h1>
                                    </div>
                                    <IoIosCloseCircle className="cursor-pointer text-3xl" onClick={() => setIsSideMenuOpen(false)}/>
                                </div>
                                <p className="cursor-pointer" onClick={() => handleClick("/comments")}>My Comments</p>
                                <p className="cursor-pointer" onClick={() => handleClick("/my")}>My blogs</p>
                                <p className="cursor-pointer" onClick={() => handleClick("/new")}>Add new</p>
                                <NavLink to={"/"} onClick={() => setIsSideMenuOpen(false)}>
                                    <p>Blogs</p>
                                </NavLink>
                            </div>
                            {/* Conditional Login/Logout Button */}
                            {token ?
                                <button className="main-btn py-1 px-2 text-white"
                                        onClick={handleLogout}>Logout</button> :
                                <button className="main-btn py-1 px-2 text-white" onClick={() => {
                                    navigate("/login");
                                    setIsSideMenuOpen(false);
                                }}>Login</button>
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;

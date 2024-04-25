import React from 'react';
import logo from "../assets/icons/iconizer-logo blog task.svg"
const Header = () => {
    return (
        <div className="w-full flex py-3 justify-center shadow-md">
            <div className="container flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img src={logo} className="max-w-9" alt=""/>
                    <h1 className="text-xl font-semibold">Blog that</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                        <p>Add new</p>
                        <p>Blogs</p>
                    </div>
                    <button className="main-btn py-1 px-2 text-white">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
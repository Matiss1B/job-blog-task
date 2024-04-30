import React from 'react';
import icon from "../assets/icons/undraw_authentication_re_svpt.svg"
import {IoIosCloseCircle} from "@react-icons/all-files/io/IoIosCloseCircle";
import {redirect, useNavigate} from "react-router-dom";
const Popup = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="absolute w-full h-screen md:w-[30rem] md:h-[30rem] bg-white p-8 flex items-center justify-center rounded shadow-lg z-50">
                        <IoIosCloseCircle className={"cursor-pointer text-3xl absolute top-3 right-3"} onClick={onClose}/>
                        <div className="w-full flex flex-col items-center space-y-5">
                            <h2 className="text-2xl font-bold mb-2">Autorization</h2>
                            <img src={icon} className="w-60 p-2"/>
                            <p className="mb-4" c>You need to login to use this feature!</p>
                            <button
                                onClick={()=> {
                                    navigate("/login")
                                }}
                                className="main-btn w-full text-white py-2"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
import React from 'react';
import Header from "../components/Header";
import {FaUser} from "@react-icons/all-files/fa/FaUser";
import {FaClock} from "@react-icons/all-files/fa/FaClock";
import {FaBook} from "@react-icons/all-files/fa/FaBook";
import {IoSend} from "@react-icons/all-files/io5/IoSend";
import {FaSearch} from "@react-icons/all-files/fa/FaSearch";
import {FaTrash} from "@react-icons/all-files/fa/FaTrash";


const Comments = () => {
    return (
        <div className="flex flex-col min-h-screen md:bg-background">
            <Header/>
            <div className="w-full h-full flex justify-center mt-10">
                <div className="container flex flex-col space-y-10">
                    <div className="flex w-full justify-center">
                        <div className="flex flex-col items-center space-y-5  md:flex-row md:space-y-0 md:space-x-20">
                            <h1 className="text-3xl md:text-4xl font-semibold">My comments</h1>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-2 gap-3">
                        <div
                            className="w-full h-32 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="flex w-full items-center justify-between">
                                <h1>Matīss Bāliņš</h1>
                                <div className="flex items-center space-x-2">
                                    <FaTrash className="text-xl text-black hover:text-red-600"/>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col">
                                <div className="flex w-full items-center space-x-3">
                                    <h1 className="font-semibold">For blog:</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1>Nosaukums</h1>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-full h-32 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="flex w-full items-center justify-between">
                                <h1>Matīss Bāliņš</h1>
                                <div className="flex items-center space-x-2">
                                    <FaTrash className="text-xl text-black hover:text-red-600"/>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col">
                                <div className="flex w-full items-center space-x-3">
                                    <h1 className="font-semibold">For blog:</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1>Nosaukums</h1>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-full h-32 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="flex w-full items-center justify-between">
                                <h1>Matīss Bāliņš</h1>
                                <div className="flex items-center space-x-2">
                                    <FaTrash className="text-xl text-black hover:text-red-600"/>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col">
                                <div className="flex w-full items-center space-x-3">
                                    <h1 className="font-semibold">For blog:</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1>Nosaukums</h1>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-full h-32 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="flex w-full items-center justify-between">
                                <h1>Matīss Bāliņš</h1>
                                <div className="flex items-center space-x-2">
                                    <FaTrash className="text-xl text-black hover:text-red-600"/>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col">
                                <div className="flex w-full items-center space-x-3">
                                    <h1 className="font-semibold">For blog:</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1>Nosaukums</h1>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
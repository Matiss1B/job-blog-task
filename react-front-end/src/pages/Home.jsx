import React from 'react';
import Header from "../components/Header";
import {FaSearch} from "@react-icons/all-files/fa/FaSearch";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen md:bg-background">
            <Header/>
            <div className="w-full h-full flex justify-center mt-10">
                <div className="container flex flex-col space-y-10">
                    <div className="flex w-full justify-center">
                        <div className="flex flex-col items-center space-y-5  md:flex-row md:space-y-0 md:space-x-20">
                        <h1 className="text-3xl md:text-4xl font-semibold">Blog list</h1>
                        <div className="flex space-x-2 bg-secondary-light p-1 rounded items-center">
                            <FaSearch className="text-secondary-dark group-hover: text-primary"/>
                            <input className="w-[15rem] bg-transparent focus:outline-none group" type="text"/>
                        </div>
                    </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-3">
                        <div
                            className="w-full h-full max-h-72 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="h-3/6 w-full rounded-t">
                                <img className=" rounded-t w-full h-full object-cover"
                                     src="https://images.pexels.com/photos/20681078/pexels-photo-20681078/free-photo-of-young-woman-in-red-lighting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                     alt=""/>
                            </div>
                            <div className="w-full h-3/6 flex flex-col">
                                <div className="flex w-full items-center justify-between">
                                    <h1 className="text-xl">Nosaukums</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1 className="font-semibold">Author:</h1>
                                        <p>Matiss</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                    countries’ competitiveness are demand condition, related industries, firm’s
                                    strategy, and the level of rivalry. Australia has been challenged for the trophy and
                                    there was an increased demand for the country to produce results</p>
                            </div>
                        </div>
                        <div
                            className="w-full h-full max-h-72 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="h-3/6 w-full rounded-t">
                                <img className=" rounded-t w-full h-full object-cover"
                                     src="https://images.pexels.com/photos/20681078/pexels-photo-20681078/free-photo-of-young-woman-in-red-lighting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                     alt=""/>
                            </div>
                            <div className="w-full h-3/6 flex flex-col">
                                <div className="flex w-full items-center justify-between">
                                    <h1 className="text-xl">Nosaukums</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1 className="font-semibold">Author:</h1>
                                        <p>Matiss</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                    countries’ competitiveness are demand condition, related industries, firm’s
                                    strategy, and the level of rivalry. Australia has been challenged for the trophy and
                                    there was an increased demand for the country to produce results</p>
                            </div>
                        </div>
                        <div
                            className="w-full h-full max-h-72 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="h-3/6 w-full rounded-t">
                                <img className=" rounded-t w-full h-full object-cover"
                                     src="https://images.pexels.com/photos/20681078/pexels-photo-20681078/free-photo-of-young-woman-in-red-lighting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                     alt=""/>
                            </div>
                            <div className="w-full h-3/6 flex flex-col">
                                <div className="flex w-full items-center justify-between">
                                    <h1 className="text-xl">Nosaukums</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1 className="font-semibold">Author:</h1>
                                        <p>Matiss</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                    countries’ competitiveness are demand condition, related industries, firm’s
                                    strategy, and the level of rivalry. Australia has been challenged for the trophy and
                                    there was an increased demand for the country to produce results</p>
                            </div>
                        </div>
                        <div
                            className="w-full h-full max-h-72 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="h-3/6 w-full rounded-t">
                                <img className=" rounded-t w-full h-full object-cover"
                                     src="https://images.pexels.com/photos/20681078/pexels-photo-20681078/free-photo-of-young-woman-in-red-lighting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                     alt=""/>
                            </div>
                            <div className="w-full h-3/6 flex flex-col">
                                <div className="flex w-full items-center justify-between">
                                    <h1 className="text-xl">Nosaukums</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1 className="font-semibold">Author:</h1>
                                        <p>Matiss</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                    countries’ competitiveness are demand condition, related industries, firm’s
                                    strategy, and the level of rivalry. Australia has been challenged for the trophy and
                                    there was an increased demand for the country to produce results</p>
                            </div>
                        </div>
                        <div
                            className="w-full h-full max-h-72 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="h-3/6 w-full rounded-t">
                                <img className=" rounded-t w-full h-full object-cover"
                                     src="https://images.pexels.com/photos/20681078/pexels-photo-20681078/free-photo-of-young-woman-in-red-lighting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                     alt=""/>
                            </div>
                            <div className="w-full h-3/6 flex flex-col">
                                <div className="flex w-full items-center justify-between">
                                    <h1 className="text-xl">Nosaukums</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1 className="font-semibold">Author:</h1>
                                        <p>Matiss</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                    countries’ competitiveness are demand condition, related industries, firm’s
                                    strategy, and the level of rivalry. Australia has been challenged for the trophy and
                                    there was an increased demand for the country to produce results</p>
                            </div>
                        </div>
                        <div
                            className="w-full h-full max-h-72 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                            <div className="h-3/6 w-full rounded-t">
                                <img className=" rounded-t w-full h-full object-cover"
                                     src="https://images.pexels.com/photos/20681078/pexels-photo-20681078/free-photo-of-young-woman-in-red-lighting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                     alt=""/>
                            </div>
                            <div className="w-full h-3/6 flex flex-col">
                                <div className="flex w-full items-center justify-between">
                                    <h1 className="text-xl">Nosaukums</h1>
                                    <div className="flex items-center space-x-1">
                                        <h1 className="font-semibold">Author:</h1>
                                        <p>Matiss</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                <p className="line-clamp-4">Porter’s factor conditions explaining Switzerland’s victory
                                    of America’s Cup sailing competition in 2005 Porter’s factor conditions for
                                    countries’ competitiveness are demand condition, related industries, firm’s
                                    strategy, and the level of rivalry. Australia has been challenged for the trophy and
                                    there was an increased demand for the country to produce results</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Header from "../components/Header";
import {FaPlus} from "@react-icons/all-files/fa/FaPlus";
import {FaPlusCircle} from "@react-icons/all-files/fa/FaPlusCircle";
import {IoCloseCircle} from "@react-icons/all-files/io5/IoCloseCircle";

const NewBlog = () => {
    return (
        <div className="flex flex-col min-h-screen md:bg-background">
            <Header/>
            <div className="w-full h-full flex  flex-col items-center mt-10">
                <div className="container flex flex-col w-full">
                    <div className="w-full flex flex-col p-5">
                        <h1 className="text-3xl md:text-4xl font-semibold">Add new Blog</h1>
                        <p className="font-semibold text-secondary-dark">Unleashing creativity through adversity.</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-10 p-5 ">
                        <div className="md:w-2/5 flex flex-col space-y-5 w-full h-full">

                        <div className="space-y-05 flex flex-col w-full">
                            <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Title</h1>
                            <div
                                className="flex w-full flex-col justify-center space-y-1 p-1 rounded-xl border-2 border-secondary  focus-within:border-primary">
                                <input
                                    placeholder={"Enter title"}
                                    className="w-full p-1 text-base bg-transparent focus:outline-none"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="space-y-05 flex flex-col w-full">
                            <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Content</h1>
                            <div
                                className="flex w-full flex-col justify-center space-y-1 p-1 rounded-xl border-2 border-secondary focus-within:border-primary">
                                <textarea
                                    placeholder="Enter text"
                                    className="w-full p-1 text-base bg-transparent focus:outline-none resize-y min-h-[15rem]"
                                ></textarea>
                            </div>
                        </div>
                        <div className="md:w-3/5 md:hidden flex flex-col w-full h-full hover:cursor-pointer">
                            <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Main image</h1>
                            <div className="space-y-05 flex flex-col w-full">
                                <input type="file" className="hidden" accept="image/*" id="img"/>
                                <div
                                    className="w-full relative rounded-xl border-dashed flex items-center justify-center h-80 border-2 border-secondary-dark">
                                    {1 == 2 ?
                                        <label htmlFor="img">

                                            <div className="flex flex-col space-y-2 items-center">
                                                <FaPlusCircle className="text-5xl text-primary"/>
                                                <h1 className="text-secondary-dark font-semibold">Add an image</h1>
                                            </div>
                                        </label>
                                        :
                                        <>
                                            <IoCloseCircle className="text-3xl absolute right-2 top-2 text-white"/>
                                        <img className="w-full h-full object-cover rounded-xl"
                                             src="https://images.pexels.com/photos/20742290/pexels-photo-20742290/free-photo-of-rote-tulpen.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                             alt=""/>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                            <div className="space-y-05 flex flex-col w-full">
                                <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Categories</h1>
                                <div className="w-full flex items-center space-x-3 flex-wrap">
                                    <div className="flex space-x-2 items-center p-2">
                                        <input type="checkbox"
                                               className="form-checkbox h-3 w-3 text-primary border-primary"/>
                                        <p>Cars</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full main-btn py-2 text-white">
                                Add blog
                            </button>
                        </div>
                        <div className="md:w-3/5 hidden md:flex flex-col w-full h-full hover:cursor-pointer">
                        <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Main image</h1>
                        <div className="space-y-05 flex flex-col w-full">
                            <input type="file" className="hidden" accept="image/*" id="img"/>
                            <div className="w-full relative rounded-xl border-dashed flex items-center justify-center h-80 border-2 border-secondary-dark">
                                {1 == 2 ?
                                <label htmlFor="img">

                                    <div className="flex flex-col space-y-2 items-center">
                                        <FaPlusCircle className="text-5xl text-primary"/>
                                        <h1 className="text-secondary-dark font-semibold">Add an image</h1>
                                    </div>
                                </label>
                                    :
                                    <>
                                        <IoCloseCircle className="text-3xl absolute right-2 top-2 text-white"/>
                                        <img className="w-full h-full object-cover rounded-xl"
                                             src="https://images.pexels.com/photos/20742290/pexels-photo-20742290/free-photo-of-rote-tulpen.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                             alt=""/>
                                    </>
                                }

                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NewBlog;
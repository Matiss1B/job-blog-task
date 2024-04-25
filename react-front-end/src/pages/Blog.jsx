import React from 'react';
import Header from "../components/Header";
import {FaUser} from "@react-icons/all-files/fa/FaUser";
import {FaClock} from "@react-icons/all-files/fa/FaClock";
import {FaBook} from "@react-icons/all-files/fa/FaBook";
import {IoSend} from "@react-icons/all-files/io5/IoSend";


const Blog = () => {
    return (
        <div className="flex flex-col min-h-screen md:bg-background">
            <Header/>
            <div className="w-full h-full flex justify-center mt-10">
                <div className="container flex flex-col md:flex-row md:space-x-10 p-2">
                    <div className="h-full w-full md:w-4/6 flex flex-col space-y-5">
                        <div className="w-full h-72 rounded-xl shadow-md">
                            <img className="object-cover w-full h-full rounded-xl"
                                 src="https://images.pexels.com/photos/20681078/pexels-photo-20681078/free-photo-of-young-woman-in-red-lighting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                 alt=""/>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-semibold">Nosaukums</h1>
                        <div className="w-full flex md:hidden flex-col justify-between space-y-5">
                            <div className="flex items-center space-x-2">
                                <div
                                    className="flex items-center justify-center p-3 border-2 border-primary h-10 w-10 rounded-full">
                                    <FaUser className="text-4xl "/>
                                </div>
                                <div className="flex flex-col w-full">
                                    <h1 className="font-semibold">Author</h1>
                                    <p>Matīss Bāliņš</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div
                                    className="flex items-center justify-center p-3 border-2 border-primary h-10 w-10 rounded-full">
                                    <FaBook className="text-4xl "/>
                                </div>
                                <div className="flex flex-col w-full">
                                    <h1 className="font-semibold">Categories</h1>
                                    <p>Car, Home, Job</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div
                                    className="flex items-center justify-center p-3 border-2 border-primary h-10 w-10 rounded-full">
                                    <FaClock className="text-4xl "/>
                                </div>
                                <div className="flex flex-col w-full">
                                    <h1 className="font-semibold">Published</h1>
                                    <p>20.01.24</p>
                                </div>
                            </div>
                        </div>
                        <p className="h-full w-full md:max-h-[20rem] overflow-y-scroll">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                            Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                            popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                            amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                            also reproduced in their exact original form, accompanied by English versions from the 1914
                            translation by H. Rackham.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                            Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                            popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                            amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                            also reproduced in their exact original form, accompanied by English versions from the 1914
                            translation by H. Rackham.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-5 w-full md:w-2/6 ">
                        <div className="w-full hidden md:flex flex-col justify-between space-y-14">
                            <div className="flex items-center space-x-2">
                                <div
                                    className="flex items-center justify-center p-3 border-2 border-primary h-12 w-12 rounded-full">
                                    <FaUser className="text-4xl "/>
                                </div>
                                <div className="flex flex-col w-full text-xl">
                                    <h1 className="font-semibold">Author</h1>
                                    <p>Matīss Bāliņš</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div
                                    className="flex items-center justify-center p-3 border-2 border-primary h-12 w-12 rounded-full">
                                    <FaBook className="text-4xl "/>
                                </div>
                                <div className="flex flex-col w-full text-xl">
                                    <h1 className="font-semibold">Categories</h1>
                                    <p>Car, Home, Job</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div
                                    className="flex items-center justify-center p-3 border-2 border-primary h-12 w-12 rounded-full">
                                    <FaClock className="text-4xl "/>
                                </div>
                                <div className="flex flex-col w-full text-xl">
                                    <h1 className="font-semibold">Published</h1>
                                    <p>20.01.24</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-between">
                            <div className="flex flex-col w-full p-2 md:p-0">
                                <h1 className={"text-2xl font-semibold"}>Comments</h1>
                                <div className="flex space-x-2 bg-secondary-light w-full py-1 px-2 rounded items-center">
                                    <input className="w-full bg-transparent focus:outline-none group" type="text"/>
                                    <IoSend className="text-2xl group-hover: text-primary"/>
                                </div>
                                <div className="h-[20rem] w-full flex flex-col overflow-y-scroll space-y-2 mt-5">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <h1 className={"font-semibold"}>Matīss Bāliņš</h1>
                                        <p>
                                            y Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                                            ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                        </p>
                                        <div className="h-0.5 w-full bg-primary rounded-xl"></div>
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full">
                                        <h1 className={"font-semibold"}>Matīss Bāliņš</h1>
                                        <p>
                                            y Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                                            ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                        </p>
                                        <div className="h-0.5 w-full bg-primary rounded-xl"></div>
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full">
                                        <h1 className={"font-semibold"}>Matīss Bāliņš</h1>
                                        <p>
                                            y Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                                            ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                        </p>
                                        <div className="h-0.5 w-full bg-primary rounded-xl"></div>
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full">
                                        <h1 className={"font-semibold"}>Matīss Bāliņš</h1>
                                        <p>
                                            y Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                                            ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                        </p>
                                        <div className="h-0.5 w-full bg-primary rounded-xl"></div>
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full">
                                        <h1 className={"font-semibold"}>Matīss Bāliņš</h1>
                                        <p>
                                            y Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                                            ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                        </p>
                                        <div className="h-0.5 w-full bg-primary rounded-xl"></div>
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full">
                                        <h1 className={"font-semibold"}>Matīss Bāliņš</h1>
                                        <p>
                                            y Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                                            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                                            ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                        </p>
                                        <div className="h-0.5 w-full bg-primary rounded-xl"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
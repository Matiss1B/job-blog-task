import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import {FaUser} from "@react-icons/all-files/fa/FaUser";
import {FaClock} from "@react-icons/all-files/fa/FaClock";
import {FaBook} from "@react-icons/all-files/fa/FaBook";
import {IoSend} from "@react-icons/all-files/io5/IoSend";
import {useParams} from "react-router-dom";
import axios from "axios";
import CommentsSection from "../components/CommentsSection";


const Blog = () => {
    function formatDateString(inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 to month index as it starts from 0
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
        return formattedDate;
    }
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [published, setPublished] = useState("")
    const [img, setImg] = useState("")
    const [comments, setComments] = useState([])
    const [categories, setCategories] = useState("");
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const fetchBlogData = async () =>{
            try {
                const response =  await axios.get("http://localhost/api/v1/blog/"+id);
                console.log(response);
                setComments(response.data.blogs.comments);
                setTitle(response.data.blogs.title);
                setDescription(response.data.blogs.description);
                setImg(response.data.blogs.img);
                setAuthor(response.data.blogs.user.name);
                setPublished(formatDateString(response.data.blogs.created_at))
                const categories = [];
                response.data.blogs.categories.map((unit)=>{
                    categories.push(unit.category.category);
                })
                setCategories(categories.join(" ,"));
                setLoading(false)
            } catch (e){
                console.log(e);
            }
        }
        fetchBlogData();
    }, []);
    if(!loading) {
        return (
            <div className="flex flex-col min-h-screen md:bg-background">
                <Header/>
                <div className="w-full h-full flex justify-center mt-10">
                    <div className="container flex flex-col md:flex-row md:space-x-10 p-2">
                        <div className="h-full w-full md:w-4/6 flex flex-col space-y-5">
                            <div className="w-full h-72 rounded-xl shadow-md">
                                <img className="object-cover w-full h-full rounded-xl"
                                     src={`http://localhost/storage/${img}`}
                                     alt=""/>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
                            <div className="w-full flex md:hidden flex-col justify-between space-y-5">
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="flex items-center justify-center p-3 border-2 border-primary h-10 w-10 rounded-full">
                                        <FaUser className="text-4xl " onClick={() => console.log(comments)}/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <h1 className="font-semibold">Author</h1>
                                        <p>{author}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="flex items-center justify-center p-3 border-2 border-primary h-10 w-10 rounded-full">
                                        <FaBook className="text-4xl "/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <h1 className="font-semibold">Categories</h1>
                                        <p>{categories}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="flex items-center justify-center p-3 border-2 border-primary h-10 w-10 rounded-full">
                                        <FaClock className="text-4xl "/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <h1 className="font-semibold">Published</h1>
                                        <p>{published}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="h-full w-full md:max-h-[20rem] overflow-y-scroll">
                                {description}
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
                                        <p>{author}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="flex items-center justify-center p-3 border-2 border-primary h-12 w-12 rounded-full">
                                        <FaBook className="text-4xl "/>
                                    </div>
                                    <div className="flex flex-col w-full text-xl">
                                        <h1 className="font-semibold">Categories</h1>
                                        <p>{categories}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="flex items-center justify-center p-3 border-2 border-primary h-12 w-12 rounded-full">
                                        <FaClock className="text-4xl "/>
                                    </div>
                                    <div className="flex flex-col w-full text-xl">
                                        <h1 className="font-semibold">Published</h1>
                                        <p>{published}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-full flex flex-col justify-between">
                                <CommentsSection recivedComments={comments}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Blog;
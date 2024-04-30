import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import {FaUser} from "@react-icons/all-files/fa/FaUser";
import {FaClock} from "@react-icons/all-files/fa/FaClock";
import {FaBook} from "@react-icons/all-files/fa/FaBook";
import {IoSend} from "@react-icons/all-files/io5/IoSend";
import {FaSearch} from "@react-icons/all-files/fa/FaSearch";
import {FaTrash} from "@react-icons/all-files/fa/FaTrash";
import axios from "axios";
import Cookies from "js-cookie";
import Popup from "../components/PopUp";
import {useNavigate} from "react-router-dom";
import FlashMessage from "../components/FlashMessages";


const Comments = () => {
    const [comments, setComments] = useState([]);
    const [authorized, setAuthorized] = useState(false);
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [type, setType] = useState("success");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get("http://localhost/api/v1/comments/get", {
                    headers:{
                        "Authorization":Cookies.get("blog-app-session-token")
                    }
                });
                setComments(response.data.comments);
            } catch (e) {
                if(e.response.data.status == 401){
                    setAuthorized(true);
                }
            }
        }
        fetchComments()
    }, []);
    const handleDelete = async (id) =>{
        setMessage(null);
        try{
            const response = await axios.delete("http://localhost/api/v1/comment/delete/"+id, {
                headers:{
                    "Authorization":Cookies.get("blog-app-session-token")
                }
            })
            if(response.data.status == 201){
                //Remove from comments
                setComments(prevComments => prevComments.filter(comment => comment.id !== id));
                setMessage(response.data.message);
                setType("success")
            }
        }catch (e) {
            console.log(e)
            if(e.response.data.status == 300){
                setMessage(e.response.data.message);
                setType("error")
            }
        }
    }
    const handleClose = () =>{
        navigate("/")
    }
    return (
        <div className="flex flex-col min-h-screen md:bg-background">
            <Header/>
            {message &&
                (
                 <FlashMessage message={message} type={type}/>
                )}
            <Popup isOpen={authorized} onClose={handleClose}/>
            <div className="w-full h-full flex justify-center mt-10">
                <div className="container flex flex-col space-y-10">
                    <div className="flex w-full justify-center">
                        <div className="flex flex-col items-center space-y-5  md:flex-row md:space-y-0 md:space-x-20">
                            <h1 className="text-3xl md:text-4xl font-semibold">My comments</h1>
                        </div>
                    </div>
                    {comments.length > 0 ?(
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-2 gap-3">
                            {comments.map((comment) => (
                                <div
                                    className="w-full h-32 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                                    <div className="flex w-full items-center justify-between">
                                        <h1>{comment.user.name}</h1>
                                        <div className="flex items-center space-x-2">
                                            <FaTrash className="text-xl text-black hover:text-red-600" onClick={()=>handleDelete(comment.id)}/>
                                        </div>
                                    </div>
                                    <div className="w-full h-full flex flex-col">
                                        <div className="flex w-full items-center space-x-3">
                                            <h1 className="font-semibold">For blog:</h1>
                                            <div className="flex items-center space-x-1">
                                                <h1 className="text-primary-dark hover:underline hover:text-primary cursor-pointer" onClick={()=>navigate("/blog/"+comment.blog.id)}>{comment.blog.title}</h1>
                                            </div>
                                        </div>
                                        <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                        <p className="line-clamp-4">{comment.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    ): (
                        <h1 className="text-xl text-primary w-full text-center">No comments yet</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Comments;
import React, { useState } from 'react';
import { IoSend } from "@react-icons/all-files/io5/IoSend";
import {useParams} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Popup from "./PopUp";

const CommentsSection = ({ recivedComments }) => {
    const [comments, setComments] = useState(recivedComments);
    const [commentErr, setCommentErr] = useState(null)
    const {id} = useParams();
    const [comment, setComment] = useState("");
    const [authorised, setAuthorised] = useState(false);
    const handleSubmit = async ()=>{
        setCommentErr(null);
        try{
            const response = await axios.post("http://localhost/api/v1/comment/create", {
                blog_id:id,
                comment:comment
            }, {
                headers:{
                    "Authorization":Cookies.get("blog-app-session-token"),
                }
            })
            console.log(response.data.comment);
            setComment("");
            setComments((prevData) => [...response.data.comment, ...prevData]);
        }catch (e) {
            console.log(e)
            if(e.response.data.status == 422){
                setCommentErr(e.response.data.errors.comment[0]);
            }
            if(e.response.data.status == 401){
                setAuthorised(true);
            }
        }
    }
    const handleClose = () =>{
        setAuthorised(false);
    }
    return (
        <div className="flex flex-col w-full p-2 md:p-0">
            <Popup isOpen={authorised} onClose={handleClose}/>
            <h1 className={"text-2xl font-semibold"}>Comments</h1>
            <div className="flex space-x-2 bg-secondary-light w-full py-1 px-2 rounded items-center">
                <input className="w-full bg-transparent focus:outline-none group" type="text" onChange={(e) => setComment(e.target.value)}/>
                <IoSend className="text-2xl group-hover: text-primary" onClick={handleSubmit}/>
            </div>
            {commentErr && (
                <p className="text-red-700 text-xs">{commentErr}</p>
            )}
            <div className="h-[20rem] w-full flex flex-col overflow-y-scroll space-y-2 mt-5">
                {comments.length === 0 ? (
                    <h1 className="w-full text-center text-primary-dark font-semibold">No comments yet, be the
                        first</h1>
                ) : (
                    comments.map((comment) => (
                        <div className="flex flex-col space-y-1 w-full" key={comment.id}>
                            <h1 className="font-semibold">{comment.user.name}</h1>
                            <p>{comment.comment}</p>
                            <div className="h-0.5 w-full bg-primary rounded-xl"></div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentsSection;

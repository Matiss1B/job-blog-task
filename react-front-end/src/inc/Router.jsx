import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import NewBlog from "../pages/New";
import Comments from "../pages/Comments";
import EditBlog from "../pages/EditBlog";
import Blogs from "../pages/Blogs";
import {useParams} from "react-router-dom";
import MyBlogs from "../pages/MyBlogs";
const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/blogs/:category" element={<BlogsWrapper />} />
            <Route path="/" element={<Home/>}/>
            <Route path="/blog/:id" element={<Blog/>}/>
            <Route path="/blog/edit/:id" element={<EditBlog/>}/>
            <Route path="/new" element={<NewBlog/>}/>
            <Route path="/comments" element={<Comments/>}/>
            <Route path="/my" element={<MyBlogs/>}/>
        </Routes>
    );
};
const BlogsWrapper = () => {
    const { category } = useParams();
    return <Blogs category={category} />;
};

export default Router;
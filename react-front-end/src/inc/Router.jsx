import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import NewBlog from "../pages/New";
const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog/:id" element={<Blog/>}/>
            <Route path="/new" element={<NewBlog/>}/>
        </Routes>
    );
};

export default Router;
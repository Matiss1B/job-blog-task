import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import Popup from "../components/PopUp";

const MyBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs]= useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const fetchCategories = async () =>{
            try {
                const response = await axios.get("http://localhost/api/v1/categories/get");
                setCategories(response.data.categories);
            }catch (e) {
                if(e.response.data.status == 401){
                    setAuthorized(true);
                }
            }
        }
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("http://localhost/api/v1/blog/all/for/user", {
                    headers:{
                        "Authorization":Cookies.get("blog-app-session-token")
                    }
                });
                console.log(response);
                if (response.status === 201) {
                    setBlogs(response.data.blogs);
                }
            } catch (e) {
                if(e.response.data.status == 401){
                    setAuthorized(true);
                }
            }
        };
        fetchBlogs();
        fetchCategories()
    }, []);
    useEffect(() => {
        const filtered = blogs.filter(blog => {
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !selectedCategory || blog.categories.some(category => category.category_id === parseInt(selectedCategory));
            return matchesSearch && matchesCategory;
        });
        setFilteredBlogs(filtered);
    }, [blogs, searchQuery, selectedCategory]);

    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        setSelectedCategory(categoryId);
        setSearchQuery('');
    };


    return (
        <div className="flex flex-col min-h-screen md:bg-background">
            <Header />
            <Popup isOpen={authorized}/>
            <div className="w-full h-full flex justify-center mt-10">
                <div className="container flex flex-col space-y-10">
                    <div className="flex w-full justify-center">
                        <div className="flex flex-col items-center space-y-5  md:flex-row md:space-y-0 md:space-x-20">
                            <h1 className="text-3xl md:text-4xl font-semibold">My blogs</h1>
                            <div className="flex items-center space-x-2">
                                <div className="flex space-x-2 bg-secondary-light p-1 rounded items-center">
                                    <FaSearch className="text-secondary-dark group-hover: text-primary"/>
                                    <input
                                        className="w-[15rem] bg-transparent focus:outline-none group"
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="flex space-x-2 bg-secondary-light p-1 rounded items-center">
                                    <select
                                        className="w-[15rem] bg-transparent focus:outline-none group"
                                        value={selectedCategory}
                                        onChange={handleCategoryChange}
                                    >
                                        <option value="">All categories</option>
                                        {categories.map((category)=> (
                                            <option value={category.id}>{category.category}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {filteredBlogs.length > 0 ?(
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-3">
                        {filteredBlogs.map(blog => (
                            <div key={blog.id}
                                 onClick={()=>navigate("/blog/edit/"+blog.id)}
                                 className="w-full h-full max-h-72 flex-col rounded around-shadow p-2 space-y-2 cursor-pointer border-transparent border-2 hover:border-primary hover:cursor-pointer">
                                <div className="h-3/6 w-full rounded-t">
                                    <img className=" rounded-t w-full h-full object-cover"
                                         src={`http://localhost/storage/${blog.img}`}
                                         alt="" />
                                </div>
                                <div className="w-full h-3/6 flex flex-col">
                                    <div className="flex w-full items-center justify-between">
                                        <h1 className="text-xl">{blog.title}</h1>
                                        <div className="flex items-center space-x-1">
                                            <h1 className="font-semibold">Author:</h1>
                                            <p>{blog.user.name}</p>
                                        </div>
                                    </div>
                                    <div className="h-1 w-full bg-primary-dark rounded-xl"></div>
                                    <p className="line-clamp-4">{blog.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                        )
                        :
                        (
                            <h1 className="text-xl text-primary w-full text-center">No blogs yet</h1>
                        )}
                </div>
            </div>
        </div>
    );
};

export default MyBlogs;

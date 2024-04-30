import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import {useNavigate, useParams} from "react-router-dom";
import {FaPlus} from "@react-icons/all-files/fa/FaPlus";
import {FaPlusCircle} from "@react-icons/all-files/fa/FaPlusCircle";
import {IoCloseCircle} from "@react-icons/all-files/io5/IoCloseCircle";
import axios from "axios";
import {HiArrowNarrowDown} from "@react-icons/all-files/hi/HiArrowNarrowDown";
import FlashMessage from "../components/FlashMessages";
import Cookies from "js-cookie";
import Popup from "../components/PopUp";

const EditBlog = () => {
    const { id } = useParams();
    const initialErrors = {
        title:[""],
        description:[""],
        img:[""],
        category_ids:[""],
    }
    const [errors, setErrors] = useState(initialErrors);
    const [categories, setCategories] = useState([]);
    const [changedImg, setChangedImg] = useState(false);
    let [selectedCategories, setSelectedCategories] = useState([]);
    const [img, setImg] = useState(null);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [success, setSuccess] = useState(null);
    const [authorized, setAuthorized] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if(!Cookies.get("blog-app-session-token")){
            setAuthorized(true);
        }
    }, []);
    const handleImg = event =>{
        setImg(event.target.files[0]);
    }
    const handleCategoryClick = (categoryId) => {
        const foundIndex = selectedCategories.findIndex(element => element === categoryId);

        if (foundIndex !== -1) {
            setSelectedCategories(prevState => prevState.filter((_, index) => index !== foundIndex));
        } else {
            setSelectedCategories(prevState => [...prevState, categoryId]);
        }
    };
    const handleSubmit = async () =>{
        setSuccess(null);
        const data = {
            title:title,
            description:description,
            category_ids:selectedCategories,
            img:img
        }
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category_ids", selectedCategories);
        if(changedImg) {
            formData.append("img", img);
        }
        try {
            const response = await axios.post("http://localhost/api/v1/blog/update/"+id, data, {
                headers:{
                    "Authorization":Cookies.get("blog-app-session-token"),
                    "Content-Type": "multipart/form-data",
                }
            })
            setSuccess(response.data.message);
        }catch (e) {
            console.log(e)
            if(e.response.data.status == 422){
                setErrors(prevState => ({
                    ...prevState,
                    ...e.response.data.errors
                }));
            }
        }
    }
    const handleDelete = async () =>{
        setSuccess(null);
        try {
            const response = await axios.delete("http://localhost/api/v1/blog/delete/"+id,{
                headers:{
                    "Authorization":Cookies.get("blog-app-session-token"),
                }
            })
            setSuccess(response.data.message);
            setTimeout(()=>{
                navigate("/my")
            },1500);
        }catch (e) {
            console.log(e)
            if(e.response.data.status == 422){
                setErrors(prevState => ({
                    ...prevState,
                    ...e.response.data.errors
                }));
            }
        }
    }

    useEffect(() => {
        const fetchCategories = async () =>{
            try {
                const response = await axios.get("http://localhost/api/v1/categories/get");
                setCategories(response.data.categories);
            }catch (e) {
                console.log(e)
            }
        }
        const fetchBlogData = async () =>{
            try {
                const response = await axios.get("http://localhost/api/v1/blog/get/update/"+id, {
                    headers:{
                        "Authorization": Cookies.get("blog-app-session-token")
                    }
                });
                const categories=[];
                response.data.blogs.categories.map((unit)=>(
                    categories.push(unit.category_id)
                ))
                console.log(response);
                setTitle(response.data.blogs.title);
                setDescription(response.data.blogs.description);
                setSelectedCategories(categories)
                setImg(response.data.blogs.img)
            }catch (e) {
                console.log(e)
            }
        }
        fetchCategories();
        fetchBlogData();
    }, []);
    const handleClose = () =>{
        navigate("/")
    }
    return (
        <div className="flex flex-col min-h-screen md:bg-background">
            <Header/>
            <Popup isOpen={authorized} onClose={handleClose}/>
            <div className="w-full h-full flex  flex-col items-center mt-10">
                {success && (
                    <FlashMessage type="success" message={success}/>
                )}
                <div className="container flex flex-col w-full">
                    <div className="w-full flex flex-col p-5">
                        <h1 className="text-3xl md:text-4xl font-semibold">Edit Blog</h1>
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
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full p-1 text-base bg-transparent focus:outline-none"
                                        type="text"
                                    />
                                </div>
                                {errors.title[0] && (
                                    <p className="text-red-700 text-xs">{errors.title[0]}</p>
                                )}
                            </div>
                            <div className="space-y-05 flex flex-col w-full">
                                <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Content</h1>
                                <div
                                    className="flex w-full flex-col justify-center space-y-1 p-1 rounded-xl border-2 border-secondary focus-within:border-primary">
                                <textarea
                                    placeholder="Enter text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full p-1 text-base bg-transparent focus:outline-none resize-y min-h-[15rem]"
                                ></textarea>
                                </div>
                                {errors.description[0] && (
                                    <p className="text-red-700 text-xs">{errors.description[0]}</p>
                                )}
                            </div>
                            <div className="md:w-3/5 md:hidden flex flex-col w-full h-full hover:cursor-pointer">
                                <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Main image</h1>
                                <div className="space-y-05 flex flex-col w-full">
                                    <input type="file" className="hidden" accept="image/*" id="img"
                                           onChange={handleImg}/>
                                    <div
                                        className="w-full relative rounded-xl border-dashed flex items-center justify-center h-80 border-2 border-secondary-dark">
                                        {!img ?
                                            <label htmlFor="img">

                                                <div className="flex flex-col space-y-2 items-center">
                                                    <FaPlusCircle className="text-5xl text-primary"/>
                                                    <h1 className="text-secondary-dark font-semibold">Add an image</h1>
                                                </div>
                                            </label>
                                            :
                                            <>
                                                <IoCloseCircle className="text-3xl absolute right-2 top-2 text-white"
                                                               onClick={() => {
                                                                   setImg(null)
                                                                   setChangedImg(true)
                                                               }
                                                               }/>
                                                <img className="w-full h-full object-cover rounded-xl"
                                                     src={changedImg ? URL.createObjectURL(img) : `http://localhost/storage/${img}`}
                                                     alt=""/>
                                            </>
                                        }

                                    </div>
                                    {errors.img[0] && (
                                        <p className="text-red-700 text-xs">{errors.img[0]}</p>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-05 flex flex-col w-full">
                                <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Categories</h1>
                                <div className="w-full flex items-center space-x-3 flex-wrap">
                                    {categories.map((category) => (
                                        <div key={category.id} className="flex space-x-2 items-center p-2">
                                            <input type="checkbox" value={category.id} checked={selectedCategories.findIndex(element => element === category.id) !== -1 ? true : false}
                                                   onClick={() => handleCategoryClick(category.id)}
                                                   className="form-checkbox h-3 w-3 text-primary border-primary"/>
                                            <p>{category.category}</p>
                                        </div>
                                    ))}
                                </div>
                                {errors.category_ids[0] && (
                                    <p className="text-red-700 text-xs">{errors.category_ids[0]}</p>
                                )}
                            </div>
                            <div className="flex items-center space-x-5">
                                <button className="w-full main-btn py-2 text-white" onClick={handleSubmit}>
                                    Add blog
                                </button>
                                <button className="bg-red-600 hover:bg-red-800 rounded-xl w-full py-2 text-white text-xl" onClick={handleDelete}>
                                    Delete blog
                                </button>
                            </div>
                        </div>
                        <div className="md:w-3/5 hidden md:flex flex-col w-full h-full hover:cursor-pointer">
                        <h1 className="ml-1 text-secondary-darkest text-sm font-semibold">Main image</h1>
                            <div className="space-y-05 flex flex-col w-full">
                                <input type="file" className="hidden" accept="image/*" id="img" onChange={handleImg}/>
                                <div
                                    className="w-full relative rounded-xl border-dashed flex items-center justify-center h-80 border-2 border-secondary-dark">
                                    {!img ?
                                        <label htmlFor="img">

                                            <div className="flex flex-col space-y-2 items-center">
                                                <FaPlusCircle className="text-5xl text-primary"/>
                                                <h1 className="text-secondary-dark font-semibold">Add an image</h1>
                                            </div>
                                        </label>
                                        :
                                        <>
                                            <IoCloseCircle className="text-3xl absolute right-2 top-2 text-white"
                                                           onClick={() => {
                                                               setImg(null)
                                                               setChangedImg(true)
                                                           }
                                                           }/>
                                            <img className="w-full h-full object-cover rounded-xl"
                                                 src={changedImg ? URL.createObjectURL(img) : `http://localhost/storage/${img}`}
                                                 alt=""/>
                                        </>
                                    }

                                </div>
                                {errors.img[0] && (
                                    <p className="text-red-700 text-xs">{errors.img[0]}</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default EditBlog;
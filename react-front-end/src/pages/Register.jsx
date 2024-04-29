import React, {useState} from 'react';
import registerIcon from "../assets/icons/undraw_my_password_re_ydq7.svg"
import axios from "axios";
import Cookies from "js-cookie";
const Register = () => {
    const initialFieldErrors = {
        name:[""],
        email:[""],
        password:[""],
        confirm_password:[""]
    }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState(initialFieldErrors);
    const handleSubmit = async () =>{
        setErrors(initialFieldErrors);
        try{
            const response = await axios.post("http://localhost/api/v1/user/register", {
                name:name,
                email:email,
                password:password,
                confirm_password:confirmPassword
            });
            if(response.data.status == 201){
                console.log(response);
            }
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
    return (
        <div className="flex min-h-screen items-center justify-center md:bg-background">
        <div className="flex w-full rounded-xl bg-white md:w-4/6	md:max-w-5xl md:shadow">
            <div className="flex w-full flex-col items-center space-y-5 p-10 md:w-3/6">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h1 className=" text-3xl font-bold tracking-wide">Welcome</h1>
                    <h1 className=" text-3xl font-bold tracking-wide">to BlogThat!</h1>
                    <p className="text-secondary">Sign un and explore!</p>
                </div>
                <div className="space-x-05 flex flex-col w-full">
                    <div className="flex w-full flex-col justify-center space-y-1">
                        <input
                            placeholder="Name"
                            onChange={(e)=>setName(e.target.value)}
                            className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                            type="text"
                        />
                    </div>
                    {errors.name[0] && (
                        <p className="text-red-700 text-xs">{errors.name[0]}</p>
                    )}
                </div>
                <div className="space-x-05 flex flex-col w-full">
                    <div className="flex w-full flex-col justify-center space-y-1">
                        <input
                            placeholder="Email"
                            onChange={(e)=>setEmail(e.target.value)}
                            className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                            type="text"
                        />
                    </div>
                    {errors.email[0] && (
                        <p className="text-red-700 text-xs">{errors.email[0]}</p>
                    )}
                </div>
                <div className="space-x-05 flex flex-col w-full">
                    <div className="flex w-full flex-col justify-center space-y-1">
                        <input
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                            type="text"
                        />
                    </div>
                    {errors.password[0] && (
                        <p className="text-red-700 text-xs">{errors.password[0]}</p>
                    )}
                </div>
                <div className="space-x-05 flex flex-col w-full">
                    <div className="flex w-full flex-col justify-center space-y-1">
                        <input
                            placeholder="Confirm password"
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                            type="text"
                        />
                    </div>
                    {errors.confirm_password[0] && (
                        <p className="text-red-700 text-xs">{errors.confirm_password[0]}</p>
                    )}
                </div>

                <div className="space-x-05 flex w-full items-center"></div>

                <div className="flex w-full flex-col items-center space-y-2">
                    <button
                        className="main-btn w-full py-4 text-white"
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                </div>
            </div>
            <div
                className="hidden w-3/6 flex-col items-center justify-center space-y-5 rounded-br-xl rounded-tr-xl bg-primary bg-opacity-80 p-5 md:flex">
                <img
                    className="w-72"
                    src={registerIcon}
                    alt="Ikona ar lietotāja reģistrāciju"
                />
            </div>
        </div>
    </div>
    );
};

export default Register;
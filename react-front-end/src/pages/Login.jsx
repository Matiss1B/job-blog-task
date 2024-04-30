import loginIcon from "../assets/icons/undraw_fingerprint_login_re_t71l (1).svg"
import {useState} from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import {redirect, useNavigate} from "react-router-dom";
function Login() {
    const initialFieldErrors = {
        email:[""],
        password:[""]
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(initialFieldErrors);
    const navigate = useNavigate();
    const handleSubmit = async () =>{
        setErrors(initialFieldErrors);
        try{
            const response = await axios.post("http://localhost/api/v1/user/login", {
                email:email,
                password:password
            });
            if(response.data.status == 201){
                console.log(response);
                Cookies.set('blog-app-session-token', response.data.token, { expires: 1/24 });
                navigate("/");
            }
        }catch (e) {
            console.log(e)
            if(e.response.data.status == 422){
                setErrors(prevState => ({
                    ...prevState,
                    ...e.response.data.errors
                }));            }
        }
    }
    return (
        <div className="App">
            <div className="flex min-h-screen items-center justify-center md:bg-background">
                <div className="flex w-full rounded-xl bg-white md:w-4/6	md:max-w-5xl md:shadow">
                    <div className="flex w-full flex-col items-center space-y-5 p-10 md:w-3/6">
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <h1 className=" text-3xl font-bold tracking-wide">Welcome</h1>
                            <h1 className=" text-3xl font-bold tracking-wide">Back!</h1>
                            <p className="text-secondary">Sign in with your account!</p>
                        </div>
                        <div className="space-x-05 flex-col flex w-full">
                            <div className="flex w-full flex-col justify-center space-y-1">
                                <input
                                    placeholder="Email"
                                    className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}
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
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}
                                    className="w-full border-b border-secondary p-1 text-sm hover:border-primary focus:border-primary  focus:outline-none"
                                    type="text"
                                />
                            </div>
                            {errors.password[0] && (
                                <p className="text-red-700 text-xs">{errors.password[0]}</p>
                            )}
                        </div>
                        <div className="space-x-05 flex w-full items-center"></div>
                        <div className="flex w-full flex-col items-center space-y-2">
                            <button
                                className="main-btn w-full py-4 text-white"
                                onClick={handleSubmit}
                            >
                                Login
                            </button>
                            <p className="underline hover:text-primary cursor-pointer" onClick={()=>navigate("/register")}>Do not have an account?</p>
                        </div>
                    </div>
                    <div
                        className="hidden w-3/6 flex-col items-center justify-center space-y-5 rounded-br-xl rounded-tr-xl bg-primary bg-opacity-80 p-5 md:flex">
                        <img
                            className="w-72"
                            src={loginIcon}
                            alt="Ikona ar lietotāja reģistrāciju"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

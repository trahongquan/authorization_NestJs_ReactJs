// import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { memo } from "react";
import toast, { Toaster } from "react-hot-toast";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        if (accessToken) {
            navigate("/");
        } else {
            toast.error('Bạn cần đăng nhập!')
        }
    }, [accessToken, navigate]);

    const  HanldeLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3333/auth/login',  { email , password });
            if(response.data.accessToken){
                localStorage.setItem('accessToken', response.data.accessToken);
                navigate("/")
                window.location.reload()
            }
        } catch (error){
            console.error('Error', error.response.data.message);
            const errorMessage = error.response.data.message;
                if (!Array.isArray(errorMessage)) {
                    toast.error(errorMessage);
                } else {
                    errorMessage.forEach(element => {
                        toast.error(element);
                    });
                }
        }
    }


    return (
        <div className="d-flex flex-column justify-content-center h-100">
                <Toaster
                position="bottom-right"
                reverseOrder={false}
                />
            <div>
                <h1 className="text-center m-2">Đăng nhập</h1>
            </div>
            <div className="row justify-content-center my-1">
                <label className="col-form-label col-1">Email:</label>
                <div className="col-4">
                    <Textfield placeholder="Abc@email.com" onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="row justify-content-center my-1">
                <label className="col-form-label col-1">Mật khẩu:</label>
                <div className="col-4">
                    <Textfield placeholder="****" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            {/* <div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div> */}
            <div className="d-flex flex-column justify-content-center m-2">
                <div className="d-inline-flex justify-content-center">
                    <button type="button" onClick={HanldeLogin}
                        className="btn btn-success m-2"> 
                        <span className="p-2"> Đăng nhập</span> 
                    </button>
                </div>
                <div className="d-inline-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <span className="mx-1">Nếu Bạn chưa có tài khoản? </span>
                        <FaHandPointRight />
                    </div>
                    <button style={{cursor: 'pointer'}} onClick={() => {navigate("/register")}}
                    className="btn btn-tranperent text-primary mx-2">Đăng ký ngay </button>
                </div>
            </div>
        </div>
    )
}

export default memo(LoginPage)
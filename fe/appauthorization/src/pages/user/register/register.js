// import Button from "@atlaskit/button";
import axios from "axios";
import { memo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { API_ROOT } from "ultils/consatnts";
import "./register.scss";

export const RegisterPage = () => {

    // const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const role = "user";
    // const navigate = useNavigate();
    // const accessToken = localStorage.getItem('accessToken');

    const handleRegistration = async () => {
        try {
            const response = await axios.post(`${API_ROOT}/auth/register`, { email, username, password, role, phone});
            console.log(response.data)

            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken);
                console.log('accessToken = ' + response.data.accessToken);
                toast.success("Đắng kí tài khoản thành công!")
                // navigate("/login");
                window.location.href="/login"
            } else {
                // setError('Đăng ký tài khoản không thành công');
                toast.error("Đắng kí tài khoản không thành công!")
                if (!Array.isArray(response.data.message)) {
                    toast.error(response.data.message);
                } else {
                    response.data.message.forEach(element => {
                        toast.error(element);
                    });
                }
            }
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (!Array.isArray(errorMessage)) {
                    toast.error(errorMessage);
                } else {
                    errorMessage.forEach(element => {
                        toast.error(element);
                    });
                }
            } else if (error.request) {
                console.error('Yêu cầu không thể được gửi đi:', error.request);
            } else {
                console.error('Lỗi khi xử lý yêu cầu:', error.message);
                toast.error(error.message)
            }
        }
    };

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <div>
                <Toaster
                position="bottom-right"
                reverseOrder={false}
                />
            </div>
            <div className="container mt-4">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOfz8c_2U4Q2z9Zxv3krooPGQhBRIl0SsPA&s" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
                                        <div className="mt-3">
                                            <h4>{username}</h4>
                                            <h4>{email}</h4>
                                            <h4>{phone}</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            {/* <button className="btn btn-primary mx-1">Follow</button> */}
                                            {/* <button className="btn btn-outline-primary mx-1">Message</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Tên đăng nhập</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={username} 
                                                onChange={handleUserNameChange}
                                                placeholder="Nhập vào tên người dùng" 
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={email} 
                                                onChange={handleEmailChange}
                                                placeholder="Email người dùng" 
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mật khẩu</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                value={password} 
                                                onChange={handlePasswordChange}
                                                placeholder="Nhập vào mật khẩu" 
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Số điện thoại</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={phone} 
                                                onChange={handlePhoneChange}
                                                placeholder="Nhập vào số điện thoại" 
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" value="(320) 380-4539"/>
                                        </div>
                                    </div> */}
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Địa chỉ</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" value="Bay Area, San Francisco, CA"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary">
                                            <button type="button" className="btn btn-primary px-4" onClick={handleRegistration}> Đăng kí</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(RegisterPage)
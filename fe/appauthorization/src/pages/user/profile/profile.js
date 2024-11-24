// import Button from "@atlaskit/button";
import axios from "axios";
import { memo, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export const ProfilePage = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    
    
    useEffect(() => {
        if (!accessToken) {
            navigate("/");
            toast.error("Bạn cần đăng nhập trước");
        } else {
            if (accessToken) {
                axios.get(`http://localhost:3333/auth/profile`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                .then(response => {
                    if (!response.data) {
                        navigate("/");
                        toast.error("Không tìm thấy thông tin người dùng");
                    } else {
                        setUser(response.data);
                    }
                })
                .catch(error => {
                    navigate("/login");
                    toast.error("Lỗi tải trang cá nhân")
                    console.error('Error:', error);
                });
            }
        }
    }, [accessToken, navigate]);

    useEffect(() => {
        if (user) {
            console.log(user); // In ra user khi user thay đổi
        }
    }, [user]);

    return (
        <div classNameName="d-flex flex-column justify-content-center h-100">
            <div>
                <Toaster
                position="bottom-right"
                reverseOrder={false}
                />
            </div>
            {
                !user ? (<div>
                    loadiing
                </div>) : (
                    <div className="container mt-4">
                        <div className="main-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center text-center">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOfz8c_2U4Q2z9Zxv3krooPGQhBRIl0SsPA&s" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
                                                <div className="mt-3">
                                                    <h4>{user.username}</h4>
                                                    <p className="text-secondary mb-1">Full Stack Developer</p>
                                                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                                    {/* <button className="btn btn-primary mx-1">Follow</button>
                                                    <button className="btn btn-outline-primary mx-1">Message</button> */}
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
                                                    <h6 className="mb-0">Tên người dùng</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input type="text" className="form-control" value={user.username}/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Email</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input type="text" className="form-control" value={user.email}/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Số điện thoại</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input type="text" className="form-control" value="(239) 816-9029"/>
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
                                                    <button type="button" className="btn btn-primary px-4"> Lưu </button>
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
            
        </div>
    )
}

export default memo(ProfilePage)
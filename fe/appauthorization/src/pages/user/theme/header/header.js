import axios from 'axios';
import LogoutButton from 'components/logoutButton';
import { memo, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

import './style.scss';

export const Header = () => {
    // const [toValue, setToValue] = useState("/login")
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          axios.get(`http://localhost:3333/auth/profile`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          .then(response => {
            // setUser(response.data);
            setIsLoggedIn(true);
            // setToValue("/profile");
            toast.success('Đăng nhập thành công!')
            console.log("Chạy lần 1");
            
          })
          .catch(error => {
            setIsLoggedIn(false);
            console.error('Error:', error);
          });
        //   navigate('/auth/profile')
        } else {
            setIsLoggedIn(false)
        }
      }, []);

    return(
        <header className='row'>
            <div className='d-none d-md-block'>
                <div className='row header-top' style={{padding: "1rem", margin: 'unset'}}>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <span>
                            <MdOutlineMailOutline /> CBM86@email.com
                        </span>
                    </div>
                    <div className='col-6 header-top-right'>
                        <ul className='d-inline-flex justify-items-center' style={{margin: 'unset'}}>
                            <li className='col-2 btn'>
                                <Link to={""}>
                                    <SiFacebook />
                                </Link>
                            </li>
                            <li className='col-2 btn '>
                                <Link to={""}>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li className='col-2 d-inline-flex'>
                                <button type='button' className='btn btn-transparent mb-2' onClick={() => {navigate("/profile")}}>
                                    <IoPersonOutline />
                                </button>
                            </li>
                            <li className='col-6 btn' id="btn_login"
                                style={{cursor: "pointer", display : isLoggedIn ? 'none' : 'block'}}>
                                <button className='btn bnt-login p-1 text-white' onClick={() => window.location.href="/login"}> Đăng nhập </button>
                            </li>
                            <li className='col-6 btn' id="btn_logout"
                            style={{cursor: "pointer", display : isLoggedIn ? 'block' : 'none'}}>
                                <LogoutButton/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='row header-middle'>
                <div className='col-3 text-center'>
                    <Link to={"/"}>
                        <strong> Hệ Thống CBM </strong>
                    </Link>
                </div>
                <div className='col-6 row text-center'>
                <div className="col-4">
                    <Link to={"/"} >
                        <span> Trang chủ </span>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to={"/"} >
                        <span> Chức năng hệ thống </span>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to={"/"} >
                        <span> Dùng thử </span>
                    </Link>
                </div>
                </div>
                <div className='col-3 text-center'>
                    <Link to={"/"} >
                        <span> Về chúng tôi </span>
                    </Link>
                </div>
            </div> */}
            <nav className="navbar navbar-expand-lg navbar-custom" style={{backgroundColor: "#508D4E"}}>
                <div className="container">
                    <Link to={"/"} >
                        <span className="navbar-brand" style={{cursor: "pointer"}}>CBM System</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto topnav" style={{cursor: "pointer"}}>
                        <li className="nav-item">
                            <Link to={"/"} >
                                <span className="nav-link" aria-current="page">Trang chủ</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} >
                                <span className="nav-link" >Chức năng hệ thống</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} >
                                <span className="nav-link" >Dùng thử</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} >
                                <span className="nav-link" >Về chúng tôi</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default memo(Header);
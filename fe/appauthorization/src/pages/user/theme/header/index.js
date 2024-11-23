import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

import LogoutButton from 'components/logoutButton';
import './style.scss';



export const Header = () => {
    const [toValue, setToValue] = useState("/login")
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
            // document.getElementById("text_lable").innerText = "Profile";
            document.getElementById("btn_login").style.display = "none";
            document.getElementById("btn_logout").style.display = "block";
            setToValue("/profile");
            toast.success('Đăng nhập thành công!')
            console.log("Chạy lần 1");
            
          })
          .catch(error => {
            console.error('Error:', error);
            // setErrorMessage('Có lỗi khi tải trang cá nhân!');
          });
        //   navigate('/auth/profile')
        }
      }, []);
    return(
        <header className='row'>
            <div>
                <Toaster
                position="top-center"
                reverseOrder={false}
                />
            </div>
            <div className='row header-top' style={{padding: "1rem"}}>
                <div className='col-6 d-flex justify-content-center'>
                    <span>
                        <MdOutlineMailOutline /> CBM86@email.com
                    </span>
                </div>
                <div className='col-6 header-top-right'>
                    <ul className='d-flex row align-content-center' style={{margin: 'unset'}}>
                        <li className='col-2'>
                            <Link to={""}>
                                <SiFacebook />
                            </Link>
                        </li>
                        <li className='col-2'>
                            <Link to={""}>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li className='col-2'>
                            <Link to={""}>
                                <IoPersonOutline />
                            </Link>
                        </li>
                        <li className='col-6' id="btn_login" style={{cursor: "pointer"}}>
                            <Link to={toValue} style={{"textDecoration": "none"}}>
                                <span id="text_lable">Đăng nhập</span>
                            </Link>
                        </li>
                        <li className='col-6' id="btn_logout" style={{cursor: "pointer"}}>
                            <LogoutButton/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row header-middle'>
                <div className='col-3 text-center'>
                    <strong> Hệ Thống CBM </strong>
                </div>
                <div className='col-6 row text-center'>
                <div className="col-4">
                    <span> Trang chủ </span>
                </div>
                <div className="col-4">
                    <span> Chức năng hệ thống </span>
                </div>
                <div className="col-4">
                    <span> Dùng thử </span>
                </div>
                </div>
                <div className='col-3 text-center'>
                    <span> Về chúng tôi </span>
                </div>
            </div>
        </header>
    )
}

export default memo(Header);
import React, { memo, useRef, useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";



import './headerAD.scss';

const Sidebar = React.forwardRef(({ toggleSidebar }, ref) => {
    return (
        <ul ref={ref} className="navbar-nav">
            <li className="nav-item">
                <button type="button" id="closeSlideBarBtn" className="btn btn-secondary d-block" onClick={toggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to={""}>Trang chủ</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={""}>Giới thiệu</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={""}>Dịch vụ</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={""}>Liên hệ</Link>
            </li>
        </ul>
    );
});

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef(null);
    
    const toggleSidebar = () => {
        const sidebarElement = sidebarRef.current;
        if (sidebarElement) {
            sidebarElement.classList.toggle("show");
        }
        setShowSidebar(!showSidebar);
    };

    return (
        <nav className="navbar navbar-light bg-light">
            
            <ul className="navbar-nav show">
                <li>
                <button id="openSlideBarBtn" className="navbar-toggler" type="button" onClick={toggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to={""}><IoHomeOutline/></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={""}>Giới thiệu</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={""}>Dịch vụ</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={""}>Liên hệ</Link>
                </li>
            </ul>
            <Sidebar toggleSidebar={toggleSidebar} ref={sidebarRef} />
        </nav>
    );
};

export default memo(Header);
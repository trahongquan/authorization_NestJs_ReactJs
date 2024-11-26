import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutButton from 'components/logoutButton';
import { memo, useState } from 'react';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './slidebar.scss';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            {/* <div className="sidebar-toggle-open" onClick={handleToggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div> */}
            <div className={`d-flex flex-column flex-shrink-0 p-3 w-auto vh-100 side__bar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-toggle" onClick={handleToggleSidebar}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <Link to="/admin/dashboard" className="mb-3 link-dark text-decoration-none">
                    <span className="fs-4 text-white">Trang quản trị</span>
                </Link>
                <hr />
                {/* <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin/dashboard" className="nav-link ">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            Chức năng
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            Quản lý tài khoản
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            Cài đặt
                        </Link>
                    </li>
                </ul> */}
                <div className='row'>
                    <div className='col-9'>
                    <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin/dashboard" className="nav-link ">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            Chức năng
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            Quản lý tài khoản
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            Cài đặt
                        </Link>
                    </li>
                </ul>
                    </div>
                    <div className='col-3'>
                    <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin/dashboard" className="nav-link ">
                            <FaHome />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            <FaHome />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            <FaHome />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            <FaHome />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard" className="nav-link ">
                            <FaHome />
                        </Link>
                    </li>
                </ul>
                    </div>
                </div>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOfz8c_2U4Q2z9Zxv3krooPGQhBRIl0SsPA&s" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Admin</strong>
                    </Link>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
                        <li><Link className="dropdown-item" to="/profile">Trang cá nhân</Link></li>
                        <li><Link className="dropdown-item" to="/admin/dashboard">Cài đặt</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="dropdown-item"><LogoutButton/></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default memo(Sidebar);

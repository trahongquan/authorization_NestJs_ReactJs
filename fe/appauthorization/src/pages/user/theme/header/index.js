import { memo } from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";
import './style.scss';


export const Header = () => {
    return(
        <div className='row'>
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
                        <li className='col-6' style={{cursor: "pointer"}}>
                            <Link to={"/login"} style={{"textDecoration": "none"}}>
                                <span>Đăng nhập</span>
                            </Link>
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
        </div>
    )
}

export default memo(Header);
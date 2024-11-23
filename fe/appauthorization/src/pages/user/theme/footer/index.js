import { memo } from 'react';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiFacebook, SiZalo } from "react-icons/si";
import { Link } from "react-router-dom";
import "./style.scss";

export const Footer = () => {
    return(
        <>
            <footer>
                <div className="container">
                    <ul>
                        <li>Liên hệ: CBM@email.com</li>
                        <li>Địa chỉ: số 4, Tôn Thất Thiệp, Ba Đình, Hà Nội</li>
                        <li>© 2024: Bản quyền thuộc về BTL86</li>
                        <li>
                            Chỉ được phát hành lại thông tin từ website này khi có sự đồng ý bằng văn bản của CBM
                        </li>
                    </ul>
                    <ul className="social-icons" style={{"listStyle": "none", "fontSize": "3em"}}>
                        <li>
                            <Link to={""}>
                                <FaInstagram/>
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <MdOutlineMailOutline/>
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <SiFacebook/>
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <SiZalo />
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer-menu">
                        <li><Link to={""}>Trang chủ</Link></li>
                        <li><Link to={""}>Giới thiệu</Link></li>
                        <li><Link to={""}>Thông tin thêm</Link></li>
                        <li><Link to={""}>Dịch vụ</Link></li>
                        <li><Link to={""}>Liên hệ</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default memo(Footer);
import { memo } from 'react';


import LogoutButton from 'components/logoutButton';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from 'react-router-dom';

import Row from './component/row';
import './dashboard.scss';

export const Dashboard = () => {
    return(
        <>
            <div className='row justify-content-around p-3'>
                <div className='ms-4 col'>
                    <span className='title__top'>Giám sát thông tin</span>
                    <span className='title__top'> • Chủ đề</span>
                </div>
                <div className="dropdown col d-flex align-items-center justify-content-end me-4">
                    <div>
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
            </div>
            <div className='main__dashboard p-4 '>
                <div className="d-flex flex-column rounded justify-align-content-between" style={{margin: "auto", backgroundColor: "#b0cab6"}}>
                    <div className='m-3 row justify-content-between px-4'>
                        <div className='d-inline-flex col-3'>
                            <input type="search" className='form-control me-2 p-3' placeholder="🔎 Tìm kiếm" aria-label='Search'/>
                            {/* <button class="btn btn-outline-success" type="submit"> <LiaSearchSolid /> </button> */}
                        </div>
                        <div className='d-inline-flex col-3 justify-content-end'>
                            <button className='btn me-2 text-white btn__add_topic'> Thêm chủ đề mới</button>
                            <button className='btn text-white btn__compare'> Thêm chủ đề mới</button>
                        </div>
                    </div>
                    <div className='m-3 row justify-content-between px-4'>
                        <div className="table">
                            <div className="row">
                                <div className="cell cell_1">Chủ đề</div>
                                <div className="cell">Ngày tạo</div>
                                <div className="cell">Người tạo</div>
                                <div className="cell_3 row g-0">
                                    <div className="cell_3_body">Thông tin</div>
                                    <div className="cell_3_body">Tích cực</div>
                                    <div className="cell_3_body">Tiêu cực</div>
                                </div>
                                <div className="cell">Thao tác</div>
                                <div className="cell">So sánh</div>
                            </div>
                            <Row number={10}></Row>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="fixed-button" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}}>
                <MdOutlineKeyboardDoubleArrowUp />
            </button>
        </>
    )
}

export default memo(Dashboard)
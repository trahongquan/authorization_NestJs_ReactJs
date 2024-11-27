import { memo } from "react";
import { IoAdd } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";


export const Row = ({ number }) => {
    const items = [];
    for (let index = 0; index < number; index++) {
        items.push(
            <div className="row row__body" key={index}>
                <div className="cell__body cell__body_1">
                Cm12.T1_thông tin liên quan đến 05 máy bay T-6C hạ cánh tại sân bay Tân Sơn Nhất
                </div>
                <div className="cell__body">Ngày tạo</div>
                <div className="cell__body">Người tạo</div>
                <div className="cell__body_3 row g-0">
                    <div className="cell__body_3_body">Thông tin</div>
                    <div className="cell__body_3_body">Tích cực</div>
                    <div className="cell__body_3_body">Tiêu cực</div>
                </div>
                <div className="cell__body">
                    <div className="bg-transparent">
                        <span className="p-2">
                            <IoAdd />
                        </span>
                        <span className="p-2">
                            <MdEdit />
                        </span>
                        <span className="p-2">
                            <MdDelete />
                        </span>
                    </div>
                </div>
                <div className="cell__body">
                    <input type="checkbox" className="form-check-input" />
                </div>
            </div>
        );
    }
    return items;
};

export default memo(Row);
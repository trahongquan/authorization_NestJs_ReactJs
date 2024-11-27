import { memo } from 'react';
import { Toaster } from 'react-hot-toast';
import Sidebar from '../sidebar/sidebar';

export const MasterLayoutAD = ({ children, ...props }) => {
    return (
        <div className="d-flex " {...props}>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                />
            <div style={{transform: "translateX(-80%)", position: "absolute"}}>
                <Sidebar />
            </div>
            <div className="flex-grow-1 d-flex flex-column bg-light w-auto vh-100 overflow-x-hidden overflow-y-scroll ms-5">
                {children}
            </div>
        </div>
    );
};

export default memo(MasterLayoutAD);
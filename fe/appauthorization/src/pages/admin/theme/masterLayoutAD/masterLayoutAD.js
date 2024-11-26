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
            <Sidebar />
            <div className="flex-grow-1 d-flex flex-column bg-light w-auto vh-100 overflow-x-hidden overflow-y-scroll">
                {children}
            </div>
        </div>
    );
};

export default memo(MasterLayoutAD);
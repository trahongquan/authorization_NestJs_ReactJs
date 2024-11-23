import { memo } from 'react';
import Footer from '../footer/index';
import Header from '../header/index';

export const MasterLayout = ({ children, ...props }) => {
    return (
        <div className='d-flex flex-column vh-100 overflow-hidden' {...props}>
            <Header />
            <div className='flex-grow-1 flex-column overflow-auto overflow-hidden' >
            {/* <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}></div> */}
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);
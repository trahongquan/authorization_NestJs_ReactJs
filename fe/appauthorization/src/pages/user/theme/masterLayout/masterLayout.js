import { memo } from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from '../footer/footer';
import Header from '../header/header';

export const MasterLayout = ({ children, ...props }) => {
    return (
        <div className='overflow-auto overflow-hidden' {...props}>
            <Header />
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                />
            {/* <div className='flex-grow-1 flex-column overflow-auto overflow-hidden' > */}
            <div >
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);
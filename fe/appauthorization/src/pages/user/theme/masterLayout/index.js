import { memo } from 'react';
import Footer from '../footer/index';
import Header from '../header/index';

export const MasterLayout = ({children, ...props}) => {
    return(
        <div {...props}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default memo(MasterLayout);
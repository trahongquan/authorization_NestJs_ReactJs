import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/user/homePage/index";
import LoginPage from "./pages/user/login/index";
import MasterLayout from './pages/user/theme/masterLayout/index';
import { ROUTERS } from "./ultils/router";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.LOGIN,
            component: <LoginPage/>
        }
    ]
    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;
import Dashboard from 'pages/admin/dashboard/dashboard';
import MasterLayoutAD from 'pages/admin/theme/masterLayoutAD/masterLayoutAD';
import { ProfilePage } from 'pages/user/profile/profile';
import { RegisterPage } from 'pages/user/register/register';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from "./pages/user/homePage/homePage";
import LoginPage from "./pages/user/login/login";
import MasterLayout from './pages/user/theme/masterLayout/masterLayout';
import { ADMIN_PATH, ROUTERS } from "./ultils/router";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.LOGIN,
            component: <LoginPage/>
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage/>
        },
        {
            path: ROUTERS.USER.REGISTER,
            component: <RegisterPage/>
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

const renderAdminRouter = () => {
    const adminRouters = [
        {
            path: ROUTERS.ADMIN.DASHBOARD,
            component: <Dashboard/>
        },
    ]
    return (
        <MasterLayoutAD>
            <Routes>
                {adminRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayoutAD>
    )
}

const RouterCustom = () => {
    const location = useLocation();
    const isAdminRouters = location.pathname.startsWith(ADMIN_PATH)
    return isAdminRouters ? renderAdminRouter() : renderUserRouter();
}

// const RouterCustom = () => {
//     return renderUserRouter();
// }

export default RouterCustom;
import axios from 'axios';

const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            // Gửi yêu cầu logout đến server
            const response = await axios.post('http://localhost:3333/auth/logout');

            if (response.data) {
                localStorage.removeItem('accessToken');
                window.location.href = '/login';
                console.log('Đã response.ok');
            }
            console.log('Đã try response.ok');
            console.log(response);
        } catch (error) {
            console.error('Đã xảy ra lỗi khi đăng xuất:', error);
        }
    };

    return (
        <button className='btn btn-logout p-1' onClick={handleLogout}>Đăng xuất</button>
    );
};

export default LogoutButton;
import { useHistory } from 'react-router-dom';
import http from '../service/httpService'

const  Logout = () => {
    const history = useHistory();
    const handleLogout = async () => {
        localStorage.removeItem('loginStatus')
        await http.get('user/logout')
        history.push("/");
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>

    )
}

export default Logout

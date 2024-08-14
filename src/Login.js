import { useState } from 'react';
import './Login.css'

const Login = ({ setIsAuthenticated }) => {

    const [user, setUser] = useState({});

    const handleChange = (name, value) => {
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAuthenticated(true);
    }


    return (
        <article className="login">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input required onChange={(e) => handleChange('username', e.target.value)}  />
                    <input required onChange={(e) => handleChange('password', e.target.value)} type="password" />
                    <button>Submit</button>
                </div>
            </form>
        </article>
    )
};

export default Login;
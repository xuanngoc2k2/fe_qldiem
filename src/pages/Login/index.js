import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { login } from '~/apis';
const Div = styled.div`
    padding-top: 100px;
    width: 500px;
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.user) {
            if (cookies.user.role === 1) navigate('/admin/qlsv');
            if (cookies.user.role === 2) navigate('/');
        }
    }, [cookies.user]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await login(email, password);
            if (!user) {
                alert('Email hoặc mật khẩu không đúng');
            }
            // } catch
            // if (user) {
            //     setCookie('user', user);
            //     if (user.role === 1) navigate('/admin/qlsv');
            //     if (user.role === 2) navigate('/');
            // } else {
            //     alert('Email hoặc mật khẩu không đúng');
            // }
        } catch (error) {
            alert('Server Error');
        }

        // TODO: register
    };

    return (
        <Div className="container mt-4">
            <form>
                <div className="form-outline mb-4 mt-4">
                    <label className="form-label mt-3" for="form2Example1">
                        Email address
                    </label>

                    <input
                        type="email"
                        id="form2Example1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="form2Example2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                    />
                </div>

                <Button type="Button" onClick={handleSubmit} className="btn btn-primary btn-block mb-4">
                    Sign in
                </Button>
            </form>
        </Div>
    );
}

export default Login;

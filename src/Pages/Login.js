import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';  // Import Link from 'react-router-dom'
import '../Assests/Css/login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const Login = () => {
    const history = useNavigate();

    const [data, setData] = useState({
        email:'',
        password: ''
    })

    const handleChange = (e) => {
        setData({...data, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/v1/user/login", data)
        .then( response => {
            if(response.data == true)
            {
                toast.info('success!', {
                    position: "bottom-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setTimeout(() => {
                    history('/home')
                }, 1800)
            }       
            else{
                toast.error('Invalid Credentials!', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
        )
        .catch(error => {
            toast.error('Server Error! Please try again in some time', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
    };


    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h2 className="heading-login">Login</h2>
                    <form onSubmit={handleSubmit}>
                         <div className="user-box">
                            <input type="email" className="input" name="Email" id="email" placeholder="email" onChange={handleChange} />
                        </div>
                        <div className="user-box">
                            <input type="password" className="input" name="password" id="password" placeholder="password" onChange={handleChange} />
                        </div>
                        <div className="sub-main">
                            <div className="btn-last">
                                <Link to="/signup" className="submit-btn" >
                                    <input type="submit" value="Submit" />
                                </Link>
                                <br></br>
                                <div>
                                    <p> Don't have an account?
                                        <Link to="/Signup">Signup</Link></p>
                                </div>
                            </div>
                            <div className="btn-last">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />     
        </>
    )
}
export default Login;

















import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, [event.target.name]: event.target.value
            }
        ))

    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(FormData);
        toast.success("Login Succesfully");
        navigate("/dashboard");
        setIsLoggedIn(true)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={FormData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    name='email'
                />
            </label>

            <label>
                <p>
                    Password<sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                />

                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>

                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button>
                Log In
            </button>
        </form>
    )
}

export default LoginForm
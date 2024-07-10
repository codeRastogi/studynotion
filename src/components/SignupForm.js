import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        firstname: "", lastname: "", email: "", password: ""
        , confirmPassword: ""
    })

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData, [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(FormData.password !== FormData.confirmPassword){
            toast.error("Passwrod didnt Match")

        }else{
        const AccountData = {
            ...FormData
        }
        toast.success("Welcome to Study Notion");
        navigate("/dashboard");
        setIsLoggedIn(true)
        console.log(FormData);
        }
    }

    return (
        <div>

            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>
                            First Name<sup>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            value={FormData.firstname}
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            name='firstname'
                        />
                    </label>

                    <label>
                        <p>
                            Last Name<sup>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            value={FormData.lastname}
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            name='lastname'
                        />
                    </label>
                </div>

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


                <div>
                    <label>
                        <p>
                            Create Password<sup>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword1 ? ("text") : ("password")}
                            value={FormData.password}
                            onChange={changeHandler}
                            placeholder='Create Password'
                            name='password'
                        />

                        <span onClick={() => setShowPassword1((prev) => !prev)}>
                            {showPassword1 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>

                    </label>

                    <label>
                        <p>
                            Confirm Password<sup>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword2 ? ("text") : ("password")}
                            value={FormData.confirmPassword}
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            name='confirmPassword'
                        />

                        <span onClick={() => setShowPassword2((prev) => !prev)}>
                            {showPassword2 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>

                    </label>
                </div>

                <button>Create Account</button>
            </form>

        </div>
    ) 
}

export default SignupForm
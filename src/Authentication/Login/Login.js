import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Cookies from 'universal-cookie';
import authImg from '../../assets/registerVector-removebg-preview.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Login = () => {

    // const cookie = new Cookies();
    const cookieCreate = () => {
        // cookie.set("Name", "Sofiuzzaman Sofi", { sameSite: "strict", path: "/", expires: new Date(new Date().getTime() + 30 * 1000), httpOnly: true })
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:5000/cookieCreate", { withCredentials: true })
            .then(res => console.log(res.data))
    };

    const cookieClear = () => {
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:5000/cookieClear", { withCredentials: true })
            .then(res => console.log(res.data))
    }


    const { user, login, google } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();

    const location = useLocation()
    const Navigate = useNavigate()
    // const from = location.state?.from?.pathname || '/dashboard'

    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')

        login(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                Navigate('/dashboard')
            })
            .catch(err => {
                setLoginError(err.message)
                console.error(err)
            })
    }
    const googleHandler = () => {
        google()
            .then(result => {
                const user = result.user
                // console.log(user)
                Navigate('/dashboard')
            })
            .catch(err => {
                setLoginError(err.message)
            })
    };


    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
    }

    return (

        <div>
            <div className="hero lg:w-[1240px] mx-auto mt-[115px] mb-[238px] bg-transparent">
                <div className="hero-content lg:h-[649px] flex-col  lg:flex-row">
                    <div className="lg:h-[566px] sm:w-full lg:w-[566px] lg:py-[41px] lg:text-left">
                        <img src={authImg} alt="" className='' />
                    </div>
                    <div>
                        <button
                            onClick={cookieCreate}
                        >
                            Cookie_ADD
                        </button>
                        <button
                            onClick={cookieClear}
                        >
                            Cookie_CLEAR
                        </button>

                    </div>

                    <div className="card  min-h-[528px] sm:w-full lg:w-[570px] rounded-[10px] bg-white shadow-2xl ">

                        <div className="card-body">
                            <h1 className='card-title lg:text-[32px] font-bold mx-auto text-black'>LOGIN</h1>
                            <hr className='border-[#66C555] mb-[54px] w-[200px] mx-auto h-0' />



                            <form onSubmit={handleSubmit(handleLogin)}>

                                {/* email field  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-black">Email:</span>
                                    </label>

                                    {/* input field  */}
                                    <input type="email" className="input input-bordered  bg-[#817878] h-[45px] rounded-lg" {...register("email", { required: 'email is required' })} name='email' />
                                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                                    {/* input field  */}

                                </div>
                                {/* email field  */}

                                {/* password field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-black">Password:</span>
                                    </label>

                                    {/* input field  */}
                                    <input type="password" className="input cursor-text input-bordered  bg-[#817878] h-[45px] rounded-lg" {...register("password", {
                                        required: 'please provide a password Sir!'


                                    })} name='password' />
                                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                                    {/* input field  */}

                                </div>
                                {/* password field */}


                                <label className="label">
                                    <p className='text-black'>New Here?,<Link to='/register' className='text-[#66C555]'>PLEASE REGISTER</Link></p>
                                </label>


                                <p className='text-red-600'>{loginError}</p>
                                <div className="mx-auto">
                                    {/* <button className="btn mb-3 text-xl w-[153px] h-[39px] bg-[#66C555] border-none rounded-[10px] uppercase">REGISTER</button> */}
                                    <input type="submit" className="btn mb-3 text-xl w-[153px] h-[39px] bg-[#66C555] border-none rounded-[10px] uppercase lg:ml-[177px] ml-[34px]" value="LOGIN" />
                                </div>

                            </form>
                            <div className='flex justify-center gap-4 py-4'>
                                {/* social signup buttons */}

                                {/* google  */}
                                <button className=' rounded-full '><FcGoogle onClick={googleHandler} className='text-4xl hover:text-[#66C555]'></FcGoogle></button>
                                {/* google  */}

                                {/* facebook */}
                                <button className=' rounded-full'><BsFacebook className='text-[#3b5998]  text-4xl'></BsFacebook></button>
                                {/* facebook */}

                                {/* github */}
                                <button className='rounded-full'><BsGithub className='text-black text-4xl '></BsGithub></button>
                                {/* github */}

                                {/* social signup buttons */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;

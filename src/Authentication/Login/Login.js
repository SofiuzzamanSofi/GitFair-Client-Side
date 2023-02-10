import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import authImg from '../../assets/registerVector-removebg-preview.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { login, google, gitHub, facebook } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
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
                console.log(user)
                navigate('/')
            })
            .catch(err => {
                setLoginError(err.message)
            })
    }
    const gitHandler = () => {
        gitHub()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate('/')
            })
            .catch(err => {
                setLoginError(err.message)
            })
    }
    const facebookHandler = () => {
        facebook()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate('/')
            })
            .catch(err => {
                setLoginError(err.message)
            })
    }



    return (

        <div>
            <div className="hero lg:w-[1240px] mx-auto mt-[115px] mb-[238px] bg-transparent">
                <div className="hero-content h-full lg:h-[649px] flex-col  lg:flex-row">
                    <div className="h-[566px] w-full lg:w-[566px] lg:py-[41px] lg:text-left">
                        <img src={authImg} alt="" className='' />
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
                                    <Link to='/resetpass'>
                                        <button className=' resetBtn text-[#66C555] my-2 text-xl'>Forgot Password?</button>
                                    </Link>
                                </div>
                                {/* password field */}


                                <label className="label">

                                </label>


                                <p className='text-red-600'>{loginError}</p>
                                <div className="mx-auto">

                                    <input type="submit" className="btn mb-3 text-xl w-[153px] h-[39px] bg-[#66C555] border-none rounded-[10px] uppercase lg:ml-[177px] ml-[64px]" value="LOGIN" />
                                </div>
                                <div className="divider text-black">OR</div>
                                <button className="btn mb-3 text-xl  h-[39px] bg-[#66C555] border-none rounded-[10px] uppercase mx-auto lg:ml-[117px] "><Link to='/register' className=''>create a new account</Link></button>
                                <div className="flex flex-col w-full border-opacity-50">

                                </div>




                            </form>
                            <div className='flex justify-center gap-4 py-4'>
                                {/* social signup buttons */}

                                {/* google  */}
                                <button className=' rounded-full '><FcGoogle onClick={googleHandler} className='text-4xl hover:text-[#66C555]'></FcGoogle></button>
                                {/* google  */}

                                {/* facebook */}
                                <button className=' rounded-full'><BsFacebook onClick={facebookHandler} className='text-[#3b5998]  text-4xl'></BsFacebook></button>
                                {/* facebook */}

                                {/* github */}
                                <button className='rounded-full'><BsGithub onClick={gitHandler} className='text-black text-4xl '></BsGithub></button>
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

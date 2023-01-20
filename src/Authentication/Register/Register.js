import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import authImg from '../../assets/registerVector-removebg-preview.png'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { user, signUp, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data)
        setSignUpError('')

        signUp(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('User Created Successfully!')
                const userInfo = {
                    displayName: data.fullName
                }
                updateUser(userInfo)

            })
            .catch(err => {
                setSignUpError(err.message)

            })

    }

    return (
        <div>
            <div className="hero lg:w-[1240px] mx-auto mt-[115px] mb-[238px] bg-transparent">
                <div className="hero-content lg:h-[649px] flex-col  lg:flex-row">
                    <div className="lg:h-[566px] lg:w-[566px] py-[41px] lg:text-left">
                        <img src={authImg} alt="vectorImage" className='' />
                    </div>


                    <div className="card lg:min-h-[670px] lg:w-[570px] rounded-[10px] bg-white shadow-2xl ">

                        <div className="card-body">
                            <h1 className='card-title lg:text-[32px] font-bold mx-auto text-black'>REGISTRATION</h1>
                            <hr className='border-[#66C555] mb-[31px] w-[200px] mx-auto h-0' />

                            {/* full name field  */}
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-black">Full Name:</span>
                                    </label>

                                    {/* input field  */}
                                    <input type="text" className="input input-bordered  bg-[#817878] h-[45px] rounded-lg" {...register("fullName", { required: 'Your Full Name is required sir!' })} name='fullName' />
                                    {errors.fullName && <p className='text-red-600'>{errors.fullName.message}</p>}
                                    {/* input field  */}

                                </div>
                                {/* full name field  */}

                                {/* select use role field  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-black">Select User Role:</span>
                                    </label>
                                    <select type='text' {...register("userRole", { required: 'Please Select An Option Sir!' })} name='userRole' className="input input-bordered  bg-[#817878] h-[45px] rounded-lg">
                                        <option selected>Normal</option>
                                        <option>Special</option>

                                    </select>
                                    {errors.userRole && <p className='text-red-600'>{errors.userRole.message}</p>}
                                </div>
                                {/* select use role field  */}

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
                                        required: 'please provide a password Sir!',

                                        minLength: { value: 6, message: 'password should be 6character or longer' },

                                        pattern: {
                                            value: /(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, message: 'Not a strong password'
                                        }
                                    })} name='password' />
                                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                                    {/* input field  */}

                                </div>
                                {/* password field */}

                                <label className="label">
                                    <p className='text-black'>If Already Registerd,<Link to='/login' className='text-[#66C555] uppercase'>Please Login</Link></p>
                                </label>

                                <div className='flex justify-center gap-4 py-4'>
                                    {/* social signup buttons */}

                                    {/* google  */}
                                    <button className=' rounded-full '><FcGoogle className='text-4xl hover:text-[#66C555]'></FcGoogle></button>
                                    {/* google  */}

                                    {/* facebook */}
                                    <button className=' rounded-full'><BsFacebook className='text-[#3b5998]  text-4xl'></BsFacebook></button>
                                    {/* facebook */}

                                    {/* github */}
                                    <button className='rounded-full'><BsGithub className='text-black text-4xl '></BsGithub></button>
                                    {/* github */}

                                    {/* social signup buttons */}
                                </div>
                                <p className='text-red-600'>{signUpError}</p>
                                <div className="mx-auto">
                                    {/* <button className="btn mb-3 text-xl w-[153px] h-[39px] bg-[#66C555] border-none rounded-[10px] uppercase">REGISTER</button> */}
                                    <input type="submit" className="btn mb-3 text-xl w-[153px] h-[39px] bg-[#66C555] border-none rounded-[10px] uppercase lg:ml-[177px] ml-[50px]" value="REGISTER" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

<input type="text" placeholder="" />
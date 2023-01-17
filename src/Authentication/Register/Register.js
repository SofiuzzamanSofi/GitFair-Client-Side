import React from 'react';
import { Link } from 'react-router-dom';
import authImg from '../../assets/registerVector-removebg-preview.png'

const Register = () => {
    return (
        <div>
            <div className="hero lg:w-[1240px] mx-auto mt-[115px] mb-[238px] bg-transparent">
                <div className="hero-content lg:h-[649px] flex-col  lg:flex-row">
                    <div className="lg:h-[566px] lg:w-[566px] py-[41px] lg:text-left">
                        <img src={authImg} alt="vectorImage" className='' />
                    </div>


                    <div className="card lg:h-[649px] lg:w-[570px] rounded-[10px] bg-white shadow-2xl ">

                        <div className="card-body">
                            <h1 className='card-title text-[32px] font-bold mx-auto text-black'>REGISTRATION</h1>
                            <hr className='border-[#66C555] mb-[31px] w-[200px] mx-auto h-0' />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Full Name:</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered  bg-[#817878] rounded-lg" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Email:</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered  bg-[#817878] rounded-lg" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Select User Role:</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered  bg-[#817878] rounded-lg" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Password:</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered bg-[#817878] rounded-lg" />
                                <label className="label">
                                    <p className='text-black'>If Already Registerd,<Link to='/login' className='text-[#66C555]'>Login</Link></p>
                                </label>
                            </div>
                            <div className="mx-auto mt-6">
                                <button className="btn text-xl w-[153px] h-[39px] bg-[#66C555] border-none rounded-[10px]">REGISTER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
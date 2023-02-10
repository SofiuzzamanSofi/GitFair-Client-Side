import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ResetPass = () => {
    const { passReset } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const Navigate = useNavigate()


    const handleresetpass = (data) => {
        passReset(data.email)
            .then(() => {
                // Password reset email sent!
                // .. 
                toast.success('Password Reset Email Has been sent,please check your email!')
                Navigate('/login')
            })
            .catch((error) => {
                console.err(error.message)
                // ..
            });
    }




    return (
        <div className='lg:w-[1240px] min-h-screen mx-auto'>
            <div className="card w-full mx-auto my-[200px] max-w-sm shadow-2xl bg-white p-5">

                <form onSubmit={handleSubmit(handleresetpass)}>
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
                    <div className="mx-auto">

                        <input type="submit" className="btn mb-3 text-xl w-[153px] h-[39px] bg-[#66C555] border-none rounded-[10px] uppercase lg:ml-[100px] mt-3 ml-[64px]" value="RESET" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPass;
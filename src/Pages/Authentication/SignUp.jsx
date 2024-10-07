import { Link, useNavigate } from 'react-router-dom';
import login from '../../../public/Image/SignUp.jpg'
import {  useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import useAuth from '../../hooks/useAuth';
const SignUp = () => {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const { createUser ,isOpen} = useAuth()

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {

        const { name, email, password, photoURL } = data

        if (password.length < 6) {
            return toast.error('Your password should be minimum 6 digits')
        }
        const regex = /^(?=.*[A-Z]).+$/;
        if (!regex.test(password)) {
            return toast.error('You Have to enter minimum 1 uppercase')
        }
        const lowRegex = /^(?=.*[a-z]).+$/;
        if (!lowRegex.test(password)) {
            return toast.error('You Have to enter minimum 1 lowercase')
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    toast.success('User Created Successfully')
                    navigate('/login')
                }


                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
            })


            .catch(error => {
                console.log(error)
                toast.error('This email already exists')
            })


    }

    return (
        <div>
            <h2 className="lg:block hidden  relative top-10 text-2xl font-bold text-center">SignUp</h2>
            <div className={`flex lg:gap-7 ${isOpen?'mt-60':''} gap-7 lg:flex-row flex-col my-10`}>

                <div className="w-1/2 ">
                    <img className='h-4/5 relative left-24 lg:left-48' src={login} alt="" />
                </div>
                <div className="w-1/2 ">
                    <div className="lg:mr-0 mx-2 ml-5 relative lg:top-14  lg:left-0 w-[330px]  lg:w-[350px] pt-3 px-6 pb-2  shadow-md rounded-md bg-white   border-2 border-blue-400 ">
                        <h2 className="lg:hidden mb-6 text-2xl font-bold text-center">SignUp</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Name</label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border border-blue-300 rounded  appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    name='name'
                                    type="text"
                                    placeholder="Your Name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Photo</label>
                                <input
                                    className="w-full border-blue-300 px-3 py-2 leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    name='photo'
                                    type="url"
                                    placeholder="Your Photo"

                                    {...register("photoURL", { required: true })}
                                />
                                {errors.photoURL && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Email</label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    name='email'
                                    type="text"
                                    placeholder="Your Email"

                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="mb-6 relative">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
                                <input
                                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline"
                                    name='passoword'
                                    id="password"
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="Your Password"

                                    {...register("password", { required: true })}
                                />
                                <div className='relative'>
                                <span onClick={() => { setShowPass(!showPass) }} className="absolute bottom-5 right-3 text-xl cursor-pointer">
                                    {
                                        showPass ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                                </div>
                                {errors.password && <span className="text-red-600">This field is required</span>}
                            </div>
                            <Link to='#'>
                                <p className='text-sky-400 link-hover text-sm relative bottom-6'>Forgotten password ?</p>
                            </Link>
                            <div className="">
                                <input type="submit" className='btn w-full bg-blue-600 text-white rounded-md' value="SignUp" />
                            </div>
                            <p className='text-center'>Already have an account?<Link to='/login' className='text-sky-400 link-hover'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;
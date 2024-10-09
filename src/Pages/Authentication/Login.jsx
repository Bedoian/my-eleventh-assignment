import { Link, useNavigate } from 'react-router-dom';
import login from '../../../public/Image/Login.jpg'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import head from '../../../public/Image/Head.avif'
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Login = () => {
    const axiosSecure = useAxiosSecure()
    const [showPass, setShowPass] = useState(false)
    const { signIn, signInWithGoogle, isOpen } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = signIn(email, password)
            const { data } = await axiosSecure.post(`/jwt`, { email: result?.user?.email })
            console.log(data);
            console.log(result);
            if (result.user) {
                toast.success(' SignIn Successful')
                navigate('/')
            }


        }
        catch (err) {
            console.log(err.message);
            toast.error(err.message)
        }



    }

    const handleGoogle = async () => {
        try {
            const result = await signInWithGoogle()
            const { data } = await axiosSecure.post(`/jwt`, { email: result?.user?.email })
            console.log(data);
            console.log(result);
            if (result.user) {
                toast.success('Google SignIn Successful')
                navigate('/')
            }


        }
        catch (err) {
            console.log(err.message);
            toast.error(err.message)
        }

    }
    return (
        <div>
            <h2 className="lg:block hidden  relative top-10 text-2xl font-bold text-center">SignUp</h2>
            <div className={`flex lg:gap-7 ${isOpen ? 'mt-60' : ''} gap-7 lg:flex-row flex-col my-10`}>

                <div className="w-1/2 ">
                    <img className='h-4/5 relative left-24 lg:left-48' src={login} alt="" />
                </div>
                <div className="w-1/2 ">
                    <div className="lg:mr-0 mx-2 ml-5 relative lg:top-14  lg:left-0 w-[330px]  lg:w-[350px]  px-6 pb-3  shadow-md rounded-md bg-white   border-2 border-blue-400 ">
                        <h2 className="lg:hidden mb-6 text-2xl font-bold text-center">SignUp</h2>
                        <form onSubmit={handleLogin}>
                            <div>
                                <img src={head} className='h-40 relative left-16' alt="" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Email</label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    name='email'
                                    type="text"
                                    placeholder="Your Email"
                                />

                            </div>
                            <div className="mb-6 relative">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
                                <input
                                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline"
                                    name='password'
                                    id="password"
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="Your Password"

                                />
                                <div className='relative'>
                                    <span onClick={() => { setShowPass(!showPass) }} className="absolute bottom-5 right-3 text-xl cursor-pointer">
                                        {
                                            showPass ? <FaEye /> : <FaEyeSlash />
                                        }
                                    </span>
                                </div>

                            </div>
                            <Link to='#'>
                                <p className='text-sky-400 link-hover text-sm relative bottom-6'>Forgotten password ?</p>
                            </Link>
                            <div className="w-full flex">
                                <div className=' '>
                                    <input type="submit" className='btn w-[150px] bg-blue-600 hover:bg-blue-600 text-white rounded-md' value="Login" />
                                </div>
                                <div className='w-1/2'>
                                    <button onClick={handleGoogle} className='bg-purple-400 hover:bg-purple-400  text-white btn w-[150px]'>Google</button>
                                </div>
                            </div>

                            <p className='text-center'>Already have an account?<Link to='/signUp' className='text-sky-400 link-hover'>SignUp</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
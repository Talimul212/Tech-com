import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import PrimaryButten from '../../Components/PrimaryButten/PrimaryButten';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(loginUserEmail,createUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.form?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handlerGoogleSingIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                saveUser(user.email,user.displayName)
                // if (user) {
                //     const email = user.email;
                //     setSocialUser(email)
                // };
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
            });
            const saveUser = ( email,displayName) => {
                const role='buyer';
                const name=displayName;
                const user = {  email,name,role };
                fetch('https://tech-com-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        setCreateUserEmail(email)
                    })
            }
    }
    const handleLogin = data => {
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    return (
        <div className='flex justify-center items-center  ' id='heroImg'>
            <div className="lg:hero-content flex-col lg:flex-row-reverse mx-24   ">
            <div className='lg:w-full p-7 shadow-lg rounded-xl bg-white  mt-[80px] w-[300px] mb-10' >
                <h2 className='text-2xl font-semibold text-center mb-6 '>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-bold">Email</span> </label>
                        <input type='text' name='email'
                            {...register("email",
                                { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-bold">Password</span> </label>
                        <input type='password' name='password'
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "password must be 6 characters or longer" }
                                })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className=' text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Fotget password</span> </label>
                    </div>
                    <input type="submit" className=' btn btn-primary  bg-gradient-to-r from-primary  to-secondary my-2 text-white w-full' value='login' />
                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='font-bold text-center'>New to Tech.com? <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                <div className='divider'>OR</div>
                <button onClick={handlerGoogleSingIn} className=' btn btn-primary  bg-gradient-to-r from-primary  to-secondary w-full  '>CONTINUE WITH GOOGLE</button>
            </div>
            <div>
                        <h1 className=" lg:text-5xl text-xl font-bold text-blue-600">How it works
                        </h1>
                        <p className="py-6 lg:text-2xl text-md font-semibold">We began Tech.com back in 2020 to give used electronics a new life. Since then, we’ve saved thousands of gadgets from landfills, and paid our customers in the process.</p>
                        <PrimaryButten>Get start</PrimaryButten>
                    </div>
            </div>
        </div>
    );
};

export default Login;
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.form?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = data => {
        console.log(data);
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
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-lg rounded-xl'>
                <h2 className='text-2xl font-semibold text-center mb-6'>Login</h2>

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
                    <input type="submit" className='btn btn-accent text-white w-full' value='login' />
                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='font-bold'>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                <div className='divider'>OR</div>
                <button className='btn  btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
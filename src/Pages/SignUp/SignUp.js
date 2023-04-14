import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import PrimaryButten from '../../Components/PrimaryButten/PrimaryButten';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [singUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })

        const saveUser = (name, email) => {
            const role = 'seller'
            const user = { name, email, role };
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

    return (
        <div className=' flex justify-center items-center '>
            <div className="hero  " id='heroImg'>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='lg:w-full p-7 shadow-lg rounded-xl bg-white  mt-[80px] w-[300px]'>
                        <h2 className='text-2xl font-semibold text-center mb-6'>Sign Up</h2>
                        <form onSubmit={handleSubmit(handleSignUp)} >
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text font-bold">Name</span></label>
                                <input type="text" {...register("name", {
                                    required: "Name is Required"
                                })} className="input input-bordered w-full" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text font-bold">Email</span> </label>
                                <input type='text' name='email' {...register('email', { required: "email is required" })}
                                    className="input input-bordered w-full" />
                                {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text font-bold">Password</span> </label>
                                <input type='password' name='password' {...register('password'
                                    , {
                                        required: "password is required",
                                        minLength: { value: 6, message: "password must be 6 characters or longer" }
                                    }
                                )}
                                    className="input input-bordered w-full" />
                                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                            </div>
                            <input type="submit" className=' btn btn-primary  bg-gradient-to-r from-primary  to-secondary my-2 text-white w-full' value='Sign Up as a seller' />
                            <div>
                                {singUpError && <p className='text-red-600'>{singUpError}</p>}
                            </div>
                        </form>
                        <p className='font-bold text-center'>Already have an <Link to='/login' className='text-secondary'> account</Link></p>

                    </div>
                    <div className='mx-12'>
                        <h1 className=" lg:text-5xl text-xl font-bold text-blue-600">How it works
                        </h1>
                        <p className="py-6 lg:text-2xl text-md font-semibold">We began Tech.com back in 2020 to give used electronics a new life. Since then, we’ve saved thousands of gadgets from landfills, and paid our customers in the process.</p>
                        <PrimaryButten>Get start</PrimaryButten>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;
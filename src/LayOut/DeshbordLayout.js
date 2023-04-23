import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shered/Navbar/Navbar';

const DeshbordLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    console.log(isSeller);
    return (
        <div >
            <Navbar></Navbar>
            <hr />
            <div className="drawer drawer-mobile mt-5">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 text-base-content text-bold lg:bg-white bg-slate-100">
                        {
                            isBuyer && <li><Link className='text-xl my-3 font-bold' to='/dashboard'>My Orders</Link></li>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link className='text-xl my-3 font-bold' to='/dashboard'>My Orders</Link></li>
                                <li><Link className='text-xl my-3 font-bold' to='/dashboard/addproduct'> Add products</Link></li>
                                <li><Link className='text-xl my-3 font-bold' to='/dashboard/myproduct'> My products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='text-xl my-3 font-bold' to='/dashboard'>My Orders</Link></li>
                                <li><Link className='text-xl my-3 font-bold' to='/dashboard/reports'>All reported Productss</Link></li>
                                <li><Link className='text-xl font-bold my-3' to='/dashboard/allusers'>All Buyers and Sellers</Link></li>
                                <li><Link className='text-xl font-bold my-3' to='/dashboard/managedoctors'>Manage Sellers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeshbordLayout;
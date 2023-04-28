import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import navicon from '../assets/icons/navicon.png'
import UseTitle from '../hooks/UseTitle';

const DeshbordLayout = () => {
    UseTitle("Dashboard")
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    console.log(user.email);
    console.log(isAdmin);
    console.log(isBuyer);
    console.log(isSeller);
    return (
        <div >
           <div className='flex justify-between items-center my-2 mx-2'>
          <img className=' block lg:hidden md:hidden' style={{width:'60px',height:'60px'}} src={navicon} alt=''></img>
           <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
           </div>
            <hr />
            <div className="drawer drawer-mobile mt-5">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 text-base-content text-bold lg:bg-white bg-slate-100">
                    <li> <img className=' hidden lg:block md:block' style={{width:'120px',height:'100px'}} src={navicon} alt=''></img></li>
                    <li><p className='text-xl my-3 font-bold'>{user?.displayName}</p></li>
                    <li><Link className='text-xl my-3 font-bold' to='/'>Home</Link></li>
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
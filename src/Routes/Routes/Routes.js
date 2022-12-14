import { createBrowserRouter } from 'react-router-dom'
import DeshbordLayout from '../../LayOut/DeshbordLayout';
import Main from '../../LayOut/Main';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Detail from '../../Pages/Appointment/AvailableAppointments/Detail';
import AddDoctor from '../../Pages/Dashbord/AddDoctor/AddDoctor';
import AddProduct from '../../Pages/Dashbord/AddProudet/AddProduct';
import MyProduct from '../../Pages/Dashbord/AddProudet/MyProduct';
import AllReportsProducts from '../../Pages/Dashbord/AllReportsProducts/AllReportsProducts';
import AllUsers from '../../Pages/Dashbord/AllUsers/AllUsers';
import MyAppointment from '../../Pages/Dashbord/Dashbord/MyAppointment/MyAppointment';
import ManageDoctors from '../../Pages/Dashbord/ManageDoctors/ManageDoctors';
import Payment from '../../Pages/Dashbord/Payment/Payment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Blog from '../../Pages/Shered/Blogs/Blog';
import DisplayError from '../../Pages/Shered/DisplayError/DisplayError';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRouter/AdminRouter';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            },
            {
                path: '/services',
                element: <Appointment></Appointment>
            },
            {
                path: '/detail/:id',
                element:<PrivateRoute> <Detail></Detail></PrivateRoute>,
                loader:({params})=>fetch(`https://tech-com-server.vercel.app/allServices/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DeshbordLayout></DeshbordLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>,
            },
            {
                path: '/dashboard/adddoctor',
                element: <PrivateRoute><AddDoctor></AddDoctor></PrivateRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/reports',
                element: <AdminRoute><AllReportsProducts></AllReportsProducts></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-com-server.vercel.app/bookings/${params.id}`)
            },
        ]
    }

]);
export default router;
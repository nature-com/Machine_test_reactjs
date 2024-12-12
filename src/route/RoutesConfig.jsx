
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import Dashboard from "../pages/Dashboard/Dashboard";


const AllRoutes = [
    {
        path: '/',
        element: <Registration />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },

]

export default AllRoutes;
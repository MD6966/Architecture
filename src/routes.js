import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import AdminDashboard from "./layouts/Dashboard/AdminDashboard";
import DashboardAdmin from './views/Admin/AdminDashboard/Dashboard';
import LeaderBoard from './views/Admin/AdminDashboard/LeaderBoard';
import Order from './views/Admin/AdminDashboard/Order';
import UserDashboard from "./layouts/Dashboard/UserDashboard";
import Event from "./views/User/UserDashboard/Event & Competition/Event";
import Edit from "./views/User/UserDashboard/Edit Profile/Edit";
import Trophy from "./views/User/UserDashboard/Trophy";
export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/wiki', element: <WikiPage /> },
        {
            path: 'admin',
            element: <AdminDashboard />,
            children: [
                { path: 'dashboard', element: <DashboardAdmin /> },
                { path: 'leaderboard', element: <LeaderBoard /> },
                { path: 'order', element: <Order /> },
            ]
        },
        {
            path: 'user',
            element: <UserDashboard />,
            children: [
                { path: 'dashboard', element: <DashboardUser /> },
                { path: 'edit', element: <Edit /> },
                { path: 'event', element: <Event /> },
                { path: 'trophy', element: <Trophy /> },
                { path: 'certificate', element: <Certificate /> },
            ]
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/admin-login',
            element: <AdminLogin />
        },
        {
            path: '*',
            element: <ErrorPage />
        }
    ]);
    return element;
}
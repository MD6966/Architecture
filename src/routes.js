import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import AdminDashboard from "./layouts/Dashboard/AdminDashboard";
import DashboardAdmin from './views/Admin/AdminDashboard/Dashboard';
import LeaderBoard from './views/Admin/AdminDashboard/LeaderBoard';
import Order from './views/Admin/AdminDashboard/Order';
import UserDashboard from "./layouts/Dashboard/UserDashboard";
import Event from "./views/User/UserDashboard/Event & Competition/Event";
import AddPost from "./views/User/UserDashboard/AddPost/AddPost";
import Trophy from "./views/User/UserDashboard/Trophy";
import WikiPage from './views/WikiPage'
import DashboardUser from './views/User/UserDashboard/Dashboard'
import Certificate from './views/User/UserDashboard/Certificate'
import Messages from "./views/Messages";
import CompetetionPage from "./views/CompetetionPage/CompetetionPage";
import Sponsers from './views/Sponsers'
import ContactUs from './views/ContactUs'
import EventsPage from "./views/EventsPage";
// import AddPost from "./views/AddPost";
import SinglePost from "./views/SinglePost";
import ViewSinglePost from "./views/Single-Post/ViewSinglePost";
import { useSelector } from "react-redux";
import ViewProfile from "./views/ViewProfile/ViewProfile";
import Allposts from "./views/User/UserDashboard/AllPosts/Allposts";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
// import ViewSinglePost from "./views/Single-Post/ViewSinglePost";
// import { useSelector } from "react-redux";
// import ViewProfile from "./views/ViewProfile/ViewProfile";
// import Allposts from "./views/User/UserDashboard/AllPosts/Allposts";
// import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import EditPost from "./views/User/UserDashboard/EditPost";
import CreatePost from "./views/User/UserDashboard/CreatePost";
import ProfilePage from "./layouts/ProfilePage/ProfilePage";
import CompetetionHome from "./views/CompetetionPage/components/CompetitionHome/CompetetionHome";
import AdminEvents from "./views/Admin/AdminEvents";
import EditEvent from "./views/Admin/AdminEvents/components/EditEvent";
import ViewProject from "./views/Landing/ViewProject";
export default function Router() {
    const isAuthenticatedAdmin = useSelector((state) => state.admin.isAuthenticatedAdmin)
    const isAuthenticatedUser = useSelector((state) => state.admin.isAuthenticatedUser)
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />
        },
        { path: '/login', element: <Login /> },
        { path: "/viewproject/:id", element: <ViewProject /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/wiki', element: <WikiPage /> },
        { path: '/messages', element: <Messages /> },
        { path: '/competition', element: <CompetetionPage /> },
        { path: '/home-competition', element: <CompetetionHome /> },
        { path: '/events', element: <EventsPage /> },


        {
            element: <ProtectedRoutes isLogged={isAuthenticatedAdmin} />,
            children: [

                {
                    path: 'admin',
                    element: <AdminDashboard />,
                    children: [
                        { path: 'dashboard', element: <DashboardAdmin /> },
                        { path: 'events', element: <AdminEvents /> },
                        { path: 'edit-event', element: <EditEvent /> },
                        { path: 'leaderboard', element: <LeaderBoard /> },
                        { path: 'order', element: <Order /> },

                    ]
                },
            ]
        },
        {
            element: <ProtectedRoutes isLogged={isAuthenticatedUser} />,
            children: [

                {
                    path: 'user',
                    element: <UserDashboard />,
                    children: [
                        { path: 'dashboard', element: <DashboardUser /> },
                        { path: 'createpost', element: <CreatePost /> },
                        { path: 'add-post', element: <AddPost /> },
                        { path: 'all-posts', element: <Allposts /> },
                        { path: 'view-post', element: <ViewSinglePost /> },
                        { path: 'edit-post', element: <EditPost /> },
                        // {path:  'profile', element: <ViewProfile />},
                        { path: 'profile', element: <ProfilePage /> },
                        { path: 'event', element: <Event /> },
                        { path: 'trophy', element: <Trophy /> },
                        { path: 'certificate', element: <Certificate /> },

                    ]
                },
            ]
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/add-post',
            element: <AddPost />
        },
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/sponser',
            element: <Sponsers />
        },
        {
            path: '/single-post',
            element: <SinglePost />
        },
        {
            path: '/contactus',
            element: <ContactUs />
        },
        // {
        //     path: '/profile',
        //     element: <ProfilePage/>
        // }
    ]);
    return element;
}
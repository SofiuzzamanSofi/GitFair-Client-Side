import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Compiler from "../Components/Compiler/Compiler";
import SearchAi from "../Components/ChatGptOpenAi/SearchAi";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Categories from "../Dashboard/Categories/Categories";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile/Profile";
import Main from "../Layout/Main";
import LiveSharing from "../Dashboard/LiveSharing/LiveSharing";
import LiveEditor from "../Dashboard/LiveSharing/LiveEditor";
import PremiumFeature from "../Dashboard/PremiumFeature/PremiumFeature";
import PaymentForm from "../Dashboard/PremiumFeature/PaymentForm";
import Privacyandpolicy from "../Components/Privacyandpolicy/Privacyandpolicy";
import TermsandCondition from "../Components/TermsandCondition/TermsandCondition";
import BlogLayout from "../Layout/BlogLayout";
import DetailBlog from "../Components/Blog/detailBlog/DetailBlog";
import ResetPass from "../Authentication/resetPass/ResetPass";
import LinkShortener from "../Components/LinkShortener/LinkShortener";
import NotFound from "../Components/NotFound/NotFound";
import FileShare from "../Dashboard/FileShare/FileShare";

// import AllServices from "../Components/AllServices/AllServices";
// import Admin from "../Admin/Admin";

import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import Allusers from "../AdminDashBoard/AllUser/Allusers";
import DashBoardCard from "../AdminDashBoard/DashBoardCard/DashBoardCard";
import PaidUsers from './../AdminDashBoard/PaidUser/PaidUsers';
import PrivateRoute from "./PrivateRoutes/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/privacyandpolicy',
                element: <Privacyandpolicy />
            },
            {
                path: '/termsandvondition',
                element: <TermsandCondition />
            },
            {
                path: '/compiler',
                element: <PrivateRoute><Compiler /></PrivateRoute>
            },
            {
                path: '/searchai',
                element: <PrivateRoute><SearchAi /></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resetpass',
                element: <ResetPass></ResetPass>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Categories />
            },
            {
                path: '/dashboard',
                element: <Categories />,
                loader: () => fetch('https://fileupload-server-taimul.vercel.app/all-files')
            },
            {
                path: '/dashboard/fileshare',
                element: <FileShare />
            },
            {
                path: '/dashboard/searchai',
                element: <SearchAi />
            },
            {
                path: '/dashboard/linkshortener',
                element: <LinkShortener />
            },
            {
                path: '/dashboard/premiumfeature',
                element: <PremiumFeature />
            },
            {
                path: '/dashboard/premiumfeature/paymentForm/:price',
                element: <PaymentForm />
            },
            {
                path: '/dashboard/liveSharing',
                element: <LiveSharing />
            },
            {
                path: '/dashboard/liveSharing/:roomId',
                element: <LiveEditor />
            },
            {
                path: '/dashboard/profile/:email',
                element: <Profile />,
                loader: async ({ params }) => fetch(`https://file-upload-server-gitfair.glitch.me/profile/${params.email}`)
            }
        ]
    },
    {
        path: '/bloglayout',
        element: <BlogLayout />,
        children: [
            {
                path: '/bloglayout/blog',
                element: <Blog></Blog>
            },
            {
                path: '/bloglayout/detailblog/:id',
                element: <PrivateRoute>,<DetailBlog/></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://gitfair-server-hopefyjamshed.vercel.app/uploaded/${params.id}`)
            }

        ]
    },
    {
        path: '/adminDashboard',
        element: <PrivateRoute><AdminDashboardLayout /></PrivateRoute>,
       
        children: [
          {
             path:'/adminDashboard',
             element: <DashBoardCard />
          },
            {
            path:'/adminDashboard/allusers',
            element: <Allusers />
          },
        
            {
            path:'/adminDashboard/paidusers',
            element: <PaidUsers />
          },
        ]

    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }

]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";

import Register from "../Authentication/Register/Register";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Compiler from "../Components/Compiler";
import SearchAi from "../Components/ChatGptOpenAi/SearchAi";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import AllFriends from "../Dashboard/AllFriends/AllFriends";
import Categories from "../Dashboard/Categories/Categories";
import Dashboard from "../Dashboard/Dashboard";
import FileShare from "../Dashboard/FileShare/FileShare";
import Profile from "../Dashboard/Profile/Profile";
import Main from "../Layout/Main";
import LiveSharing from "../Dashboard/LiveSharing/LiveSharing";
import LiveEditor from "../Dashboard/LiveSharing/LiveEditor";
import PremiumFeature from "../Dashboard/PremiumFeature/PremiumFeature";
import PaymentForm from "../Dashboard/PremiumFeature/PaymentForm";
import Privacyandpolicy from "../Components/Privacyandpolicy/Privacyandpolicy";
import TermsandCondition from "../Components/TermsandCondition/TermsandCondition";
import AllServices from "../Components/AllServices/AllServices";

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
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/privacyandpolicy',
                element: <Privacyandpolicy />
            },
            {
                path: '/termsandvondition',
                element: <TermsandCondition />,
            },
            {
                path: '/compiler',
                element: <Compiler />
            },
            {
                path: '/allservices',
                element: <AllServices />
            },
            {
                path: '/searchai',
                element: <SearchAi />
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'dashboard/dashboard',
                element: <Categories />
            },
            {
                path: 'dashboard/profile',
                element: <Profile />
            },
            {
                path: 'dashboard/fileshare',
                element: <FileShare />
            },
            {
                path: 'dashboard/allfriends',
                element: <AllFriends />
            },
            {
                path: 'dashboard/liveSharing',
                element: <LiveSharing />
            },
            {
                path: 'dashboard/liveSharing/:roomId',
                element: <LiveEditor />
            },
            {
                path: 'dashboard/premiumfeature',
                element: <PremiumFeature />
            },
            {
                path: 'dashboard/premiumfeature/paymentForm/:price',
                element: <PaymentForm />
            },

        ]
    }

]);

export default router;
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
// import AllServices from "../Components/AllServices/AllServices";
import Admin from "../Admin/Admin";
import LinkShortener from "../Components/LinkShortener/LinkShortener";
import NotFound from "../Components/NotFound/NotFound";

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
                element: <TermsandCondition />,
            },
            {
                path: '/compiler',
                element: <Compiler />
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
        element: <Dashboard />,
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
                loader: ({ params }) => fetch(`http://localhost:5000/profile/${params.email}`)
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
                element: <DetailBlog></DetailBlog>,
                loader: async ({ params }) => fetch(`https://gitfair-server-hopefyjamshed.vercel.app/uploaded/${params.id}`)
            }

        ]
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [

        ]

    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }

]);

export default router;
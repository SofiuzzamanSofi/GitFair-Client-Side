import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";

import Register from "../Authentication/Register/Register";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Compiler from "../Components/Compiler";
import SearchAi from "../Components/ChatGptOpenAi/SearchAi";
import Contact from "../Components/Contact/Contact";
import CreateShare from "../Components/CreateShare/CreateShare";
import Home from "../Components/Home/Home";
import AllFriends from "../Dashboard/AllFriends/AllFriends";
import Categories from "../Dashboard/Categories/Categories";
import Dashboard from "../Dashboard/Dashboard";
import FileShare from "../Dashboard/FileShare/FileShare";
import Profile from "../Dashboard/Profile/Profile";
import Main from "../Layout/Main";

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
        ]
    }

]);

export default router;
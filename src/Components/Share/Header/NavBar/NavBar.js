import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './../../../../Context/AuthProvider/AuthProvider';

const mainMenu = [
    {
        id: 1,
        menuName: "Home",
        menuLink: "/",
    },
    {
        id: 2,
        menuName: "About Us",
        menuLink: "/about"
    },
    {
        id: 3,
        menuName: "Contact Us",
        menuLink: "/contact",
    },
    {
        id: 4,
        menuName: "Blog",
        menuLink: "/bloglayout/blog",
    },
    {
        id: 5,
        menuName: "Dashboard",
        menuLink: "/dashboard"
    }
]
const mainMenu2 = [
    {
        id: 1,
        menuName: "Home",
        menuLink: "/",
    },
    {
        id: 2,
        menuName: "About Us",
        menuLink: "/about"
    },
    {
        id: 3,
        menuName: "Contact Us",
        menuLink: "/contact",
    },
    {
        id: 4,
        menuName: "Blog",
        menuLink: "/bloglayout/blog",
    }

]

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)

    return (

        <>
            {user?.email ?
                <>{
                    mainMenu?.map(menu => <li key={menu.id} className='text-white active:bg-black text-xl'>
                        <NavLink to={menu.menuLink}>
                            {menu.menuName}
                        </NavLink>
                    </li>)
                }
                </>
                :
                <>{
                    mainMenu2?.map(menu => <li key={menu.id} className='text-white active:bg-black text-xl'>
                        <NavLink to={menu.menuLink}>
                            {menu.menuName}
                        </NavLink>
                    </li>)
                }
                </>}


        </>
    );
};

export default NavBar;
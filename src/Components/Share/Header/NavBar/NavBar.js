import React from 'react';
import { NavLink } from 'react-router-dom';

const mainMenu = [
    {
        id: 1,
        menuName: "Home",
        menuLink: "/",
    },
    {
        id: 2,
        menuName: "About",
        menuLink: "/about",
    },
    {
        id: 3,
        menuName: "Contact Us",
        menuLink: "/contact",
    },
    {
        id: 4,
        menuName: "Blog",
        menuLink: "/blog",
    },
    {
        id: 5,
        menuName:"Code Editor",
        menuLink: "/compiler"
    }
]

const NavBar = () => {
    return (
        <>
            {
                mainMenu?.map(menu => {
                    return (
                        <>
                            <li key={menu.id} className='text-white active:bg-black text-xl'><NavLink to={menu.menuLink}>{menu.menuName}</NavLink></li>
                        </>
                    )
                })
            }

        </>
    );
};

export default NavBar;
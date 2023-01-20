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
        menuName:"Code Editor",
        menuLink: "/compiler"
    },
    {    
        id: 3,
        menuName: "Search AI",
        menuLink: "/searchai",
    },
    {
        id: 4,
        menuName: "Blog",
        menuLink: "/blog",
    },
]

const NavBar = () => {
    return (
        <>
            {
                mainMenu?.map(menu => <li key={menu.id} className='text-white active:bg-black text-xl'>
                    <NavLink to={menu.menuLink}>
                        {menu.menuName}
                    </NavLink>
                </li>)
            }

        </>
    );
};

export default NavBar;
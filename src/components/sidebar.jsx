import React from 'react';
import Navlinkactive from './navlinkActive';
import {  NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="mb-8 tracking-wider">
                <header className="font-extrabold text-md px-2 text-gray-300 uppercase ">
                    Todo List App
                </header>
                <span className='text-xs text-gray-500 px-2 uppercase '>By Resi Wicaksono</span>
            </div>
            <div className="mb-8 rounded-xl py-3 bg-blue-700 hover:bg-blue-600 ">
                <NavLink to='/' className='mx-3 font-extrabold px-2 text-gray-200 uppercase'> Dashboard</NavLink>
            </div>

            <div className="mb-8  collapse rounded-xl bg-blue-700 collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title mx-3 font-extrabold px-2 text-gray-200 uppercase" >
                    React Js
                </div>
                <div className="collapse-content ">
                    <Navlinkactive to='/hooks' title="Hooks" />
                    <Navlinkactive to='/routing' title="Routing" />
                    <Navlinkactive to='/redux' title="Redux" />
                </div>
            </div>

            <div className="mb-8  collapse rounded-xl bg-blue-700 collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title mx-3 font-extrabold px-2 text-gray-200 uppercase" >
                        MYSQL
                </div>
                <div className="collapse-content ">
                    <Navlinkactive to='/crud-mysql' title="CRUD Mysql" />
                </div>
            </div>

        </div>
    );
}

export default Sidebar;

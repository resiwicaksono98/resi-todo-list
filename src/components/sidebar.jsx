import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Checked } from '../assets/index';

const Sidebar = () => {
    return (
        <div>
            <div className="mb-8 tracking-wider">
                <header className="font-extrabold text-md px-2 text-gray-300 uppercase ">
                    Todo List Resi Wicaksono
                </header>
            </div>
            <div className="mb-8 tracking-wider">
                <header className="font-extrabold px-2 text-gray-400 uppercase">
                    Dashboard
                </header>
                <NavLink to='/' className={({ isActive }) => (`block text-gray-400 ${isActive ? 'bg-blue-500 text-gray-200' : ''} hover:text-gray-200 py-2 px-3 text-md my-2 mx-2 rounded-xl flex `)} >Dashboard <img src={Checked} className='h-5 px-2' alt="check" /></NavLink>
            </div>
            <div className="mb-8 tracking-wider">
                <header className="font-extrabold px-2 text-gray-400 uppercase">
                    React Js
                </header>
                <NavLink to='/redux' className={({ isActive }) => (`block text-gray-400 ${isActive ? 'bg-blue-500 text-gray-200' : ''} hover:text-gray-200 py-2 px-3 text-md my-2 mx-2 rounded-xl flex`)} >Redux <img src={Checked} className='h-5 px-2' alt="check" /></NavLink>
            </div>
        </div>
    );
}

export default Sidebar;

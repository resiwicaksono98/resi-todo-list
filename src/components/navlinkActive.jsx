import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Checked } from '../assets/index';

const Navlinkactive = ({to,title, ...rest}) => {
    return (
        <div>
              <NavLink to={to} className={({ isActive }) => (`block text-gray-300 ${isActive ? 'bg-blue-500 text-gray-200' : ''} hover:text-gray-200 py-2 px-3 text-md  mx-2 rounded-xl flex  uppercase`)} >{title} <img src={Checked} className='h-5 px-2' alt="check" /></NavLink>
                <hr className='my-2 opacity-50'/>
        </div>
    );
}

export default Navlinkactive;

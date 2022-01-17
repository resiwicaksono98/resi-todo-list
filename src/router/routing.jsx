import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import {Dashboard, Redux} from '../pages/index';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Redux" element={<Redux />} />
            </Routes>
        </div>
    );
}

export default Routing;

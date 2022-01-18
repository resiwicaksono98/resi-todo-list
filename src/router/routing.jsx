import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Dashboard, Redux, Hooks} from '../pages/index';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/redux" element={<Redux />} />
                <Route path="/hooks" element={<Hooks />} />
            </Routes>
        </div>
    );
}

export default Routing;

import Navbar from 'components/Navbar';
import './i18n';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router';

const HomePage = React.lazy(() => import('pages/home'));
const LoginPage = React.lazy(() => import('module_auth/LoginPage'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Suspense fallback={<p>loading page</p>}>
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);

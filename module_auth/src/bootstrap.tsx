import { authResources } from 'exposes/i18n';
import LoginPage from 'exposes/LoginPage';
import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router';

i18next.use(initReactI18next).init({
    resources: authResources,
    lng: 'id', // default language
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

import { authResources } from 'exposes/i18n';
import LoginPage from 'exposes/LoginPage';
import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';

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
        <LoginPage />
    </React.StrictMode>
);

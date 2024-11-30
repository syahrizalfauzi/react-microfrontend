import { authResources } from 'exposes/i18n';
import LoginPage from 'exposes/LoginPage';
import i18next from 'i18next';
import store from 'module_redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';

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
        <Provider store={store}>
            <LoginPage />
        </Provider>
    </React.StrictMode>
);

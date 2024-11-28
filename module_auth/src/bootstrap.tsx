import LoginButton from 'components/LoginButton';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        module_auth <LoginButton />
    </React.StrictMode>
);

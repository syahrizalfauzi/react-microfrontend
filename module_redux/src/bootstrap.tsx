import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        This is module-redux that exposes slices, useAppDispatch, useAppSelector, and the store to
        be used on other modules
    </React.StrictMode>
);

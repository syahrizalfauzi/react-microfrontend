import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from 'module1/Counter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Counter />
        This is a Module Federation App
    </React.StrictMode>
);

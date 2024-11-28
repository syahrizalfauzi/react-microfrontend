import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from 'module_counter/Counter';
import CounterRedux from 'module_counter/CounterRedux';
import store from 'module_redux/store';
import LoginButton from 'module_auth/LoginButton';
import { Provider } from 'react-redux';
import HostCounter from 'components/HostCounter';
import { Button } from 'ibbiz-react-component';
import AuthStatus from 'components/AuthStatus';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <p>Button from ibbiz-react-component (package from host)</p>
            <Button>Button</Button>

            <p>Counter from module_counter w ibbiz-react-component (package from module_counter)</p>
            <Counter />

            <p>HostCounter from host (with redux)</p>
            <HostCounter />

            <p>CounterRedux from module_counter (with redux)</p>
            <CounterRedux />

            <p>LoginButton from module_auth</p>
            <LoginButton />

            <p>AuthStatus from host w redux</p>
            <AuthStatus />
        </Provider>
    </React.StrictMode>
);

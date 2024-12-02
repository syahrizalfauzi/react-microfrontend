import AuthStatus from 'components/AuthStatus';
import HostCounter from 'components/HostCounter';
import { Button } from 'ibbiz-react-component';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const LoginButton = React.lazy(() => import('module_auth/LoginButton'));
const Counter = React.lazy(() => import('module_counter/Counter'));
const CounterGlobal = React.lazy(() => import('module_counter/CounterGlobal'));

const HomePage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClickPurge = async () => {
        localStorage.clear();
        window.location.reload();
    };

    const handleClickLogin = () => {
        navigate('/login');
    };

    return (
        <>
            <Button onClick={handleClickLogin}>go to login page</Button>
            <h1>Package Sharing</h1>
            <p>Button from ibbiz-react-component (package from host)</p>
            <Button>Button</Button>

            <p>Counter from module_counter w ibbiz-react-component (package from module_counter)</p>
            <Suspense fallback={<p>loading Counter</p>}>
                <Counter />
            </Suspense>

            <h1>Redux</h1>
            <p>HostCounter from host (with global state)</p>
            <HostCounter />

            <p>CounterGlobal from module_counter (with global state)</p>
            <Suspense fallback={<p>loading CounterRedux</p>}>
                <CounterGlobal />
            </Suspense>

            <p>LoginButton from module_auth</p>
            <Suspense fallback={<p>loading LoginButton</p>}>
                <LoginButton />
            </Suspense>

            <p>AuthStatus from host w global state</p>
            <AuthStatus />

            <Button onClick={handleClickPurge}>purge persistor</Button>

            <h1>Translation</h1>
            <p>{t('host:example')}</p>
        </>
    );
};

export default HomePage;

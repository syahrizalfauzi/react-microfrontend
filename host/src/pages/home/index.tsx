import AuthStatus from 'components/AuthStatus';
import HostCounter from 'components/HostCounter';
import { Button } from 'ibbiz-react-component';
import LoginButton from 'module_auth/LoginButton';
import LoginPage from 'module_auth/LoginPage';
import Counter from 'module_counter/Counter';
import CounterRedux from 'module_counter/CounterRedux';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>Package Sharing</h1>
            <p>Button from ibbiz-react-component (package from host)</p>
            <Button>Button</Button>

            <p>Counter from module_counter w ibbiz-react-component (package from module_counter)</p>
            <Counter />

            <h1>Redux</h1>
            <p>HostCounter from host (with redux)</p>
            <HostCounter />

            <p>CounterRedux from module_counter (with redux)</p>
            <CounterRedux />

            <p>LoginButton from module_auth</p>
            <LoginButton />

            <p>AuthStatus from host w redux</p>
            <AuthStatus />

            <h1>Translation</h1>
            <p>{t('host:example')}</p>
            <LoginPage />
        </>
    );
};

export default HomePage;

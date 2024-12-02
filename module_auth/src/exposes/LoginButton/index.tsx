import { Button } from 'ibbiz-react-component';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useAuthStore } from 'exposes/store';
import { useNavigate } from 'react-router';

const LoginButton = () => {
    const { t } = useTranslation();
    const { auth, login, logout } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = async () => {
        if (auth) {
            logout();
            return;
        }

        setIsLoading(true);
        const result = await login('usernamehere');
        alert(`logged in as ${result?.username}, locale = ${result?.locale}`);
        setIsLoading(false);
        navigate('/home');
    };

    return (
        <Button onClick={handleClick} loading={isLoading}>
            {auth ? t('auth:logout_button') : t('auth:login_button')}
        </Button>
    );
};

export default LoginButton;

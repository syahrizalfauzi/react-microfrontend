import { useAppDispatch, useAppSelector } from 'module_redux/store';
import { authSlice } from 'module_redux/auth';
import { Button } from 'ibbiz-react-component';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { isFulfilled } from '@reduxjs/toolkit';

const LoginButton = () => {
    const { t } = useTranslation();
    const auth = useAppSelector(state => state.auth.auth);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (auth) {
            dispatch(authSlice.actions.logout());
            return;
        }

        setIsLoading(true);
        const result = await dispatch(authSlice.actions.login('usernamehere'));
        if (isFulfilled(result)) {
            alert(`logged in as ${result.payload?.username}, locale = ${result.payload?.locale}`);
        }
        setIsLoading(false);
    };

    return (
        <Button onClick={handleClick} loading={isLoading}>
            {auth ? t('auth:logout_button') : t('auth:login_button')}
        </Button>
    );
};

export default LoginButton;

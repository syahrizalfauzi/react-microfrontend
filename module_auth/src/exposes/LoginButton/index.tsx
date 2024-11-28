import { useAppDispatch, useAppSelector } from 'module_redux/store';
import { authSlice } from 'module_redux/auth';
import { Button } from 'ibbiz-react-component';
import { useTranslation } from 'react-i18next';

const LoginButton = () => {
    const { t } = useTranslation();
    const auth = useAppSelector(state => state.auth.auth);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        if (auth) {
            dispatch(authSlice.actions.logout());
            return;
        }

        dispatch(
            authSlice.actions.login({
                flow: 'single',
                usertype: 123,
                username: 'Syahrizal Fauzi',
                canMake: true,
                canVerify: false,
                canApprove: false,
                canAll: false,
                locale: 'id',
                applicationId: 'APPID123',
                corpId: 'RIZALCORP',
                needBusinessField: false
            })
        );
    };

    return (
        <Button onClick={handleClick}>
            {auth ? t('auth:logout_button') : t('auth:login_button')}
        </Button>
    );
};

export default LoginButton;

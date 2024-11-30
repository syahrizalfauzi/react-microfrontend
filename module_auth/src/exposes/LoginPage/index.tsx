import LoginButton from 'exposes/LoginButton';
import { Button } from 'ibbiz-react-component';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
    const { t, i18n } = useTranslation();

    const handleClickChangeLang = () => {
        i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id');
    };

    return (
        <div>
            <h1>{t('auth:title')}</h1>
            <p>{t('auth:content')}</p>
            <LoginButton />
            <Button onClick={handleClickChangeLang} type="outlined">
                {t('auth:change_lang')}
            </Button>
        </div>
    );
};

export default LoginPage;

import { useAppSelector } from 'module_redux/store';

const AuthStatus = () => {
    const auth = useAppSelector(state => state.auth.auth);

    if (!auth?.username) {
        return <p>Not logged in</p>;
    }

    return <p>Logged in as {auth.username}</p>;
};

export default AuthStatus;

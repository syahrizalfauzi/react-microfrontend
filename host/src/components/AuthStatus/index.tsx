import { useAuthStore } from 'module_auth/store';

const AuthStatus = () => {
    const { auth } = useAuthStore();

    if (!auth?.username) {
        return <p>Not logged in</p>;
    }

    return <p>Logged in as {auth.username}</p>;
};

export default AuthStatus;

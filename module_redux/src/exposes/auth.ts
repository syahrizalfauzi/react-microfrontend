import createAppSlice from 'utils/createAppSlice';

export type AuthState = {
    auth?: {
        username: string;
        locale: 'id' | 'en';
    };
    loading: boolean;
};

const initialState: AuthState = {
    auth: undefined,
    loading: false
};

export const authSlice = createAppSlice({
    name: 'auth',
    initialState,
    reducers: create => ({
        logout: create.reducer<void>(state => {
            state.auth = undefined;
        }),
        login: create.asyncThunk<AuthState['auth'], string>(
            async (username: string) => {
                await new Promise(resolve => {
                    setTimeout(resolve, 1000);
                });

                const payload: AuthState['auth'] = {
                    username,
                    locale: 'id'
                };

                return payload;
            },
            {
                fulfilled: (state, action) => {
                    state.auth = action.payload;
                }
            }
        )
    })
});

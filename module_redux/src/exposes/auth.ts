import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
    auth?: {
        flow: 'single' | 'multi';
        usertype: number;
        username: string;
        canMake: boolean;
        canVerify: boolean;
        canApprove: boolean;
        canAll: boolean;
        locale: 'id' | 'en';
        applicationId: string;
        corpId: string;
        needBusinessField: boolean;
    };
};

const initialState: AuthState = {
    auth: undefined
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState['auth']>) => {
            state.auth = action.payload;
        },
        logout: state => {
            state.auth = undefined;
        }
    }
});

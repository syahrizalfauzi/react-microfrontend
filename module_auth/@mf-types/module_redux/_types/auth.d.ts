import { PayloadAction } from '@reduxjs/toolkit';
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
export declare const authSlice: import("@reduxjs/toolkit").Slice<AuthState, {
    login: (state: import("immer").WritableDraft<AuthState>, action: PayloadAction<AuthState["auth"]>) => void;
    logout: (state: import("immer").WritableDraft<AuthState>) => void;
}, "auth", "auth", import("@reduxjs/toolkit").SliceSelectors<AuthState>>;

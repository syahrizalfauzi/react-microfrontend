export type AuthState = {
    auth?: {
        username: string;
        locale: 'id' | 'en';
    };
    loading: boolean;
};
export declare const authSlice: import("@reduxjs/toolkit").Slice<AuthState, {
    logout: import("@reduxjs/toolkit").CaseReducer<AuthState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.reducer;
    };
    login: {
        pending?: import("@reduxjs/toolkit").CaseReducer<AuthState, import("@reduxjs/toolkit").PayloadAction<undefined, string, {
            arg: string;
            requestId: string;
            requestStatus: "pending";
        }, never>> | undefined;
        rejected?: import("@reduxjs/toolkit").CaseReducer<AuthState, import("@reduxjs/toolkit").PayloadAction<unknown, string, {
            arg: string;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        fulfilled?: import("@reduxjs/toolkit").CaseReducer<AuthState, import("@reduxjs/toolkit").PayloadAction<{
            username: string;
            locale: "id" | "en";
        } | undefined, string, {
            arg: string;
            requestId: string;
            requestStatus: "fulfilled";
        }, never>> | undefined;
        settled?: import("@reduxjs/toolkit").CaseReducer<AuthState, import("@reduxjs/toolkit").PayloadAction<{
            username: string;
            locale: "id" | "en";
        } | undefined, string, {
            arg: string;
            requestId: string;
            requestStatus: "fulfilled";
        }, never> | import("@reduxjs/toolkit").PayloadAction<unknown, string, {
            arg: string;
            requestId: string;
            requestStatus: "rejected";
            aborted: boolean;
            condition: boolean;
        } & ({
            rejectedWithValue: true;
        } | ({
            rejectedWithValue: false;
        } & {})), import("@reduxjs/toolkit").SerializedError>> | undefined;
        options?: import("@reduxjs/toolkit").AsyncThunkOptions<string, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }> | undefined;
    } & {
        _reducerDefinitionType: import("@reduxjs/toolkit").ReducerType.asyncThunk;
    } & {
        payloadCreator: import("@reduxjs/toolkit").AsyncThunkPayloadCreator<{
            username: string;
            locale: "id" | "en";
        } | undefined, string, {
            state?: undefined;
            dispatch?: undefined;
            extra?: unknown;
            rejectValue?: unknown;
            serializedErrorType?: unknown;
            pendingMeta?: unknown;
            fulfilledMeta?: unknown;
            rejectedMeta?: unknown;
        }>;
    };
}, "auth", "auth", import("@reduxjs/toolkit").SliceSelectors<AuthState>>;

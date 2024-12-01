declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    counter: {
        value: number;
    };
    auth: import("./auth").AuthState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: {
            value: number;
        };
        auth: import("./auth").AuthState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    counter: {
        value: number;
    };
    auth: import("./auth").AuthState;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    counter: {
        value: number;
    };
    auth: import("./auth").AuthState;
}>;
export default store;

declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    counter: {
        value: number;
    };
    auth: import("./auth").AuthState;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: {
            value: number;
        };
        auth: import("./auth").AuthState;
    } & import("redux-persist/es/persistReducer").PersistPartial, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const persistor: import("redux-persist").Persistor;
export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    counter: {
        value: number;
    };
    auth: import("./auth").AuthState;
} & import("redux-persist/es/persistReducer").PersistPartial, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    counter: {
        value: number;
    };
    auth: import("./auth").AuthState;
} & import("redux-persist/es/persistReducer").PersistPartial>;
export default store;

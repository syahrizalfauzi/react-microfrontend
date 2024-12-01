import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth';
import { counterSlice } from './counter';

const reducers = combineReducers({
    counter: counterSlice.reducer,
    auth: authSlice.reducer
});

const persistedReducers = persistReducer(
    {
        key: 'root',
        storage,
        blacklist: ['counter']
    },
    reducers
);

const store = configureStore({
    reducer: persistedReducers
});

export const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;

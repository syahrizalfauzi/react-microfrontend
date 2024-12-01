import { PayloadAction } from '@reduxjs/toolkit';
import createAppSlice from 'utils/createAppSlice';

export const counterSlice = createAppSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

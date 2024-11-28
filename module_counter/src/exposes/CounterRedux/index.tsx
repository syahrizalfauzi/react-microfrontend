import React from 'react';
import { useAppDispatch, useAppSelector } from 'module_redux/store';
import { counterSlice } from 'module_redux/counter';

const CounterRedux: React.FC = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector(state => state.counter.value);

    const handleDecrement = () => {
        dispatch(counterSlice.actions.decrement());
    };

    const handleIncrement = () => {
        dispatch(counterSlice.actions.increment());
    };

    return (
        <div>
            <button type="button" onClick={handleDecrement}>
                -
            </button>
            <span>{value}</span>
            <button type="button" onClick={handleIncrement}>
                +
            </button>
        </div>
    );
};

export default CounterRedux;

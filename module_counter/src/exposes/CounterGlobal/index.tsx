import { useCounterStore } from 'exposes/store';
import React from 'react';

const CounterRedux: React.FC = () => {
    const { value, increment, decrement } = useCounterStore();

    return (
        <div>
            <button type="button" onClick={decrement}>
                -
            </button>
            <span>{value}</span>
            <button type="button" onClick={increment}>
                +
            </button>
        </div>
    );
};

export default CounterRedux;

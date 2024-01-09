import React from 'react';
type CounterProps = {
    count?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
};
declare const Counter: React.FC<CounterProps>;
export default Counter;

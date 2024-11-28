import React, { useEffect, useState } from 'react';
import { Button } from 'ibbiz-react-component';

type CounterProps = {
    count?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
};

const Counter: React.FC<CounterProps> = ({ count, onDecrement, onIncrement }) => {
    const [current, setCurrent] = useState(count ?? 0);

    useEffect(() => {
        if (count === undefined) return;
        setCurrent(count);
    }, [count]);

    const handleIncrement = () => {
        setCurrent(current + 1);

        if (onIncrement) {
            onIncrement();
        }
    };

    const handleDecrement = () => {
        setCurrent(current - 1);
        if (onDecrement) {
            onDecrement();
        }
    };

    return (
        <div>
            this is from module1
            <Button type="danger" onClick={handleDecrement}>
                -
            </Button>
            <span>{current}</span>
            <Button type="primary" onClick={handleIncrement}>
                +
            </Button>
        </div>
    );
};

export default Counter;

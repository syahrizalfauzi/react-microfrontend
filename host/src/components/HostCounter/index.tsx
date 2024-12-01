import { useCounterStore } from 'module_counter/store';

const HostCounter = () => {
    const { decrement, value, increment } = useCounterStore();

    return (
        <div>
            <button type="button" onClick={decrement}>
                decrement
            </button>
            <span>{value}</span>
            <button type="button" onClick={increment}>
                increment
            </button>
        </div>
    );
};

export default HostCounter;

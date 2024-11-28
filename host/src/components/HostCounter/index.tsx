import { useAppDispatch, useAppSelector } from 'module_redux/store';
import { counterSlice } from 'module_redux/counter';

const HostCounter = () => {
    const value = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <button type="button" onClick={() => dispatch(counterSlice.actions.decrement())}>
                decrement
            </button>
            <span>{value}</span>
            <button type="button" onClick={() => dispatch(counterSlice.actions.increment())}>
                increment
            </button>
        </div>
    );
};

export default HostCounter;

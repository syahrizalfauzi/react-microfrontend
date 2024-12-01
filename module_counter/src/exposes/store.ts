import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CounterState = {
    value: number;
};

export type CounterActions = {
    increment: () => void;
    decrement: () => void;
    incrementBy: (amount: number) => void;
};

export const useCounterStore = create<CounterState & CounterActions>()(
    persist(
        set => ({
            value: 0,
            increment: () => set(state => ({ value: state.value + 1 })),
            decrement: () => set(state => ({ value: state.value - 1 })),
            incrementBy: (amount: number) => set(state => ({ value: state.value + amount }))
        }),
        { name: 'counter' }
    )
);

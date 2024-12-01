export type CounterState = {
    value: number;
};
export type CounterActions = {
    increment: () => void;
    decrement: () => void;
    incrementBy: (amount: number) => void;
};
export declare const useCounterStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<CounterState & CounterActions>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<CounterState & CounterActions, CounterState & CounterActions>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: CounterState & CounterActions) => void) => () => void;
        onFinishHydration: (fn: (state: CounterState & CounterActions) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<CounterState & CounterActions, CounterState & CounterActions>>;
    };
}>;

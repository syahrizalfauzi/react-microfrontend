import { PayloadAction } from '@reduxjs/toolkit';
export declare const counterSlice: import("@reduxjs/toolkit").Slice<{
    value: number;
}, {
    increment: (state: import("immer").WritableDraft<{
        value: number;
    }>) => void;
    decrement: (state: import("immer").WritableDraft<{
        value: number;
    }>) => void;
    incrementByAmount: (state: import("immer").WritableDraft<{
        value: number;
    }>, action: PayloadAction<number>) => void;
}, "counter", "counter", import("@reduxjs/toolkit").SliceSelectors<{
    value: number;
}>>;

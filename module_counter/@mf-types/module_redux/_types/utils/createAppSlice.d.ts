declare const createAppSlice: <State, CaseReducers extends import("@reduxjs/toolkit").SliceCaseReducers<State>, Name extends string, Selectors extends import("@reduxjs/toolkit").SliceSelectors<State>, ReducerPath extends string = Name>(options: import("@reduxjs/toolkit").CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>) => import("@reduxjs/toolkit").Slice<State, CaseReducers, Name, ReducerPath, Selectors>;
export default createAppSlice;
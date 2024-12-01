export type AuthState = {
    auth?: {
        username: string;
        locale: 'id' | 'en';
    };
};
export type AuthActions = {
    login: (username: string) => Promise<AuthState['auth']>;
    logout: () => void;
};
export declare const useAuthStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<AuthState & AuthActions>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<AuthState & AuthActions, AuthState & AuthActions>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: AuthState & AuthActions) => void) => () => void;
        onFinishHydration: (fn: (state: AuthState & AuthActions) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<AuthState & AuthActions, AuthState & AuthActions>>;
    };
}>;

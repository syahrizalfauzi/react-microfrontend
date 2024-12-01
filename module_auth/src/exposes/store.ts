import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export const useAuthStore = create<AuthState & AuthActions>()(
    persist(
        set => ({
            auth: undefined,
            logout: () => {
                set({
                    auth: undefined
                });
            },
            login: async username => {
                await new Promise(resolve => {
                    setTimeout(resolve, 1000);
                });

                const payload: AuthState['auth'] = {
                    username,
                    locale: 'id'
                };

                set({
                    auth: payload
                });
                return payload;
            }
        }),
        {
            name: 'auth'
        }
    )
);

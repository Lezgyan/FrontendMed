
export interface User {
    email: string;
    name: string;
}

export interface UserState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}

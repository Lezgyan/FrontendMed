export async function loginApi(email: string, password: string) {
    // имитация запроса
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve({ user: { email, name: 'John Doe'}, token: 'fake-jwt-token' });
        }, 1000);
    });
}

export async function registerApi(email: string, password: string) {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve({ user: { email, name: 'New User'}, token: 'new-fake-jwt-token' });
        }, 1000);
    });
}

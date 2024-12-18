export async function fetchUserData() {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(['Item1', 'Item2', 'Item3']);
        }, 1000);
    });
}

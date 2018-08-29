export const UPDATE = 'UPDATE';

export function updateSomething(credentials) {
    return {
        type: UPDATE,
        payload: credentials
    }
}
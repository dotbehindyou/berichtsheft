
const _url = new URL('/api/', window.location.origin);

export const API_Reports = {
    getAll: () => fetch('/', {
        method: 'GET'
    }),
    get: () => fetch('/', {
        method: 'GET'
    }),
    create: () => fetch('/', {
        method: 'POST'
    }),
    update: () => fetch('/', {
        method: 'PUT'
    }),
    delete: () => fetch('/', {
        method: 'DELETE'
    }),
}
import {ICredentials} from "../interfaces";

const authService = {
    loginUser: (field: string, user: ICredentials): void => {
        localStorage.setItem(field, JSON.stringify(user));
    },
    logoutUser: (field: string): void => {
        localStorage.removeItem(field);
    },
    getAuthUser: (field: string): ICredentials => {
        const user = localStorage.getItem(field);
        return user !== null ? JSON.parse(user) : {};
    },
}

export {
    authService
}
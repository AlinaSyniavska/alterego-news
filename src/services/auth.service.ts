import {ICredentials} from "../interfaces";
import {fakeCredentials} from "../constants";

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
    isUserValid: (user: ICredentials): boolean => {
        const {username, password} = user;
        return username === fakeCredentials.USERNAME && password === fakeCredentials.PASSWORD;
    },
}

export {
    authService
}
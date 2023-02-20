import {FC, ReactElement} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {authService} from "../services";
import {localStorageItems} from "../constants";

interface IProps {
    children: ReactElement,
}

const RequireAuth: FC<IProps> = ({children}) => {
    const location = useLocation();
    const authUser = authService.getAuthUser(localStorageItems.LOGIN_USER);

    if(Object.keys(authUser).length === 0){
        return <Navigate to={'/'} state={location}/>;
    }

    return children;
};

export {RequireAuth};
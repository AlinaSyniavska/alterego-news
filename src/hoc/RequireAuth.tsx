import {FC, ReactElement} from "react";
import {useLocation} from "react-router-dom";

interface IProps {
    children: ReactElement,
}

const RequireAuth: FC<IProps> = ({children}) => {
    const location = useLocation();
    // const {isAuth} = useSelector(state => state.authState);

/*    if(!isAuth){
        return <Navigate to={'/login'} state={location}/>;
    }*/

    return children;
};

export {RequireAuth};
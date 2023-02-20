import {FC, useEffect} from "react";
import React from "react";
import {Container} from "@mui/material";

import {Login} from "../Login/Login";
import {Logout} from "../Logout/Logout";
import {useAppSelector} from "../../hooks";

const AuthButtons: FC = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);

    /*    const [authUser, setAuthUser] = useState<Partial<ICredentials>>({});

        useEffect(() => {
            setAuthUser(authService.getAuthUser(localStorageItems.LOGIN_USER));
        }, [])*/

    useEffect(() => {
        console.log('isAuth = ' + isAuth)
    }, [isAuth])

    return (
        <React.Fragment>
            <Container maxWidth="lg"
                       sx={{paddingTop: '20px', display: 'flex', columnGap: '10px', justifyContent: 'end'}}>
                {
                    isAuth
                        ? <Logout/>
                        : <Login/>
                }
            </Container>
        </React.Fragment>

    );
};

export {AuthButtons};
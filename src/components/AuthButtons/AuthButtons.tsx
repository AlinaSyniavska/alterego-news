import {FC, useEffect} from "react";
import React from "react";
import {Container} from "@mui/material";

import {Login} from "../Login/Login";
import {Logout} from "../Logout/Logout";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {localStorageItems} from "../../constants";
import {authService} from "../../services";
import {authActions} from "../../redux";

const AuthButtons: FC = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const authUser = authService.getAuthUser(localStorageItems.LOGIN_USER);
        if(Object.keys(authUser).length !== 0){
            dispatch(authActions.setAuth());    // for reload
        }
    }, [])

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
import {FC, useEffect, useState} from "react";
import {Container} from "@mui/material";

import {localStorageItems} from "../../constants";
import {authService} from "../../services";
import {Login} from "../Login/Login";
import {Logout} from "../Logout/Logout";
import {ICredentials} from "../../interfaces";
import React from "react";

const AuthButtons: FC = () => {

    const [authUser, setAuthUser] = useState<Partial<ICredentials>>({});

    useEffect(() => {
        setAuthUser(authService.getAuthUser(localStorageItems.LOGIN_USER));
    }, [])

    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{paddingTop: '20px', display: 'flex', columnGap: '10px', justifyContent: 'end'}}>
{/*                {
                    authUser
                        ? <Login/>
                        : <Logout/>
                }*/}

                <Login/>
                <Logout/>

            </Container>
        </React.Fragment>

    );
};

export {AuthButtons};
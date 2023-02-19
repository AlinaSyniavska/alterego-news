import React, {FC} from "react";
import {Button, ThemeProvider} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

import {authService, muiServices} from "../../services";
import {localStorageItems} from "../../constants";

const Login: FC = () => {

    const loginUser = () => authService.loginUser(localStorageItems.LOGIN_USER, { username: 'asd', password: 'asr'});

    return (
        <React.Fragment>
            <ThemeProvider theme={muiServices.createCustomTheme()}>
                <Button
                    variant="contained"
                    startIcon={<LoginIcon/>}
                    color="secondary"
                    sx={{width: '100px'}}
                    onClick={loginUser}
                >
                    Login
                </Button>
            </ThemeProvider>
        </React.Fragment>
    );
};

export {Login};
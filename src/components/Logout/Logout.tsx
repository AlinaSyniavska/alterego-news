import React, {FC} from "react";
import {Button, ThemeProvider} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import {authService, muiServices} from "../../services";
import {localStorageItems} from "../../constants";
import {useNavigate} from "react-router-dom";

const Logout: FC = () => {
    const navigate = useNavigate();

    const logoutUser = () => {
        authService.logoutUser(localStorageItems.LOGIN_USER);
        navigate('/', {replace: true});
    }

    return (
        <React.Fragment>
            <ThemeProvider theme={muiServices.createCustomTheme()}>
                <Button
                    variant="contained"
                    startIcon={<LogoutIcon/>}
                    color="secondary"
                    sx={{width: '100px'}}
                    onClick={logoutUser}
                >
                    Logout
                </Button>
            </ThemeProvider>
        </React.Fragment>
    );
};

export {Logout};
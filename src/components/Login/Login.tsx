import React, {FC} from "react";
import {Button, ThemeProvider} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import {NavLink} from "react-router-dom";

import {muiServices} from "../../services";

const Login: FC = () => {
    return (
        <React.Fragment>
            <NavLink to={'/auth'} style={{textDecoration: 'none'}}>
                <ThemeProvider theme={muiServices.createCustomTheme()}>
                    <Button
                        variant="contained"
                        startIcon={<LoginIcon/>}
                        color="secondary"
                        sx={{width: '100px'}}
                    >
                        Login
                    </Button>
                </ThemeProvider>
            </NavLink>
        </React.Fragment>
    );
};

export {Login};
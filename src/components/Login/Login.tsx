import React, {FC} from "react";
import {Button, ThemeProvider} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import {NavLink} from "react-router-dom";

import {muiServices} from "../../services";
import {useTranslation} from "react-i18next";

const Login: FC = () => {
    const {t} = useTranslation('common');

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
                        {t('btnLogin.title')}
                    </Button>
                </ThemeProvider>
            </NavLink>
        </React.Fragment>
    );
};

export {Login};
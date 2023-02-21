import React, {FC} from "react";
import {Button, ThemeProvider} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import {authService, muiServices} from "../../services";
import {localStorageItems} from "../../constants";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";
import {useTranslation} from "react-i18next";

const Logout: FC = () => {
    const {t} = useTranslation('common');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const logoutUser = () => {
        authService.logoutUser(localStorageItems.LOGIN_USER);
        dispatch(authActions.resetAuth());
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
                    {t('btnLogout.title')}
                </Button>
            </ThemeProvider>
        </React.Fragment>
    );
};

export {Logout};
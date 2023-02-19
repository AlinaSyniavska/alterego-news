import React from "react";
import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";

import {AuthButtons, Header} from "../../components";

const MainLayout: FC = () => {

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header/>
                <AuthButtons/>
                <Outlet/>
            </Container>
        </React.Fragment>
    );
};

export {MainLayout};
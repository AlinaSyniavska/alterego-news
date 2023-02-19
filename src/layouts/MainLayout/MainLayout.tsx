import React from "react";
import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";

import {Auth, Header} from "../../components";

const MainLayout: FC = () => {

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header/>
                <Auth/>
                <Outlet/>
            </Container>
        </React.Fragment>
    );
};

export {MainLayout};
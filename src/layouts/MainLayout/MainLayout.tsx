import React from "react";
import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";

const MainLayout: FC = () => {

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                {/*<Header/>*/}
                <Outlet/>
            </Container>
        </React.Fragment>
    );
};

export {MainLayout};
import React from "react";
import {FC} from "react";
import {Container} from "@mui/material";

import {AuthForm} from "../../components";

const AuthPage: FC = () => {
    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{paddingTop: '20px'}}>
                <AuthForm/>
            </Container>
        </React.Fragment>
    );
};

export {AuthPage};
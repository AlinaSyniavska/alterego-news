import React from "react";
import {FC} from "react";
import {Button, ThemeProvider} from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";

import {muiServices} from "../../services";

const ButtonLoadNews: FC = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={muiServices.createCustomTheme()}>
                <Button variant="contained" startIcon={<LoopIcon/>} color="secondary"
                        sx={{marginBottom: '50px', alignSelf: 'flex-end', width: '150px'}}
                >
                    Load more
                </Button>
            </ThemeProvider>
        </React.Fragment>
    );
};

export {ButtonLoadNews};
import React, {useEffect, useState} from "react";
import {FC} from "react";
import {Button, ThemeProvider} from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";

import {muiServices} from "../../services";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {newsActions} from "../../redux";
import {useTranslation} from "react-i18next";

const ButtonLoadNews: FC = () => {
    const {t} = useTranslation('common');
    const {newsPortion} = useAppSelector(state => state.newsReducer);
    const dispatch = useAppDispatch();
    const [count, setCount] = useState<number>(newsPortion);

    const setNumberClick = () => {
        setCount(prevState => prevState + 1);
    }

    useEffect(() => {
        dispatch(newsActions.setNewsPortion({count}));
    }, [count])

    return (
        <React.Fragment>
            <ThemeProvider theme={muiServices.createCustomTheme()}>
                <Button
                    variant="contained"
                    startIcon={<LoopIcon/>}
                    color="secondary"
                    sx={{marginBottom: '50px', alignSelf: 'flex-end', width: '150px'}}
                    onClick={setNumberClick}
                >
                    {t('btnLoadNews.title')}
                </Button>
            </ThemeProvider>
        </React.Fragment>
    );
};

export {ButtonLoadNews};
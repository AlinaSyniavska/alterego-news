import {FC, useEffect} from "react";
import React from "react";
import {useLocation, useSearchParams} from "react-router-dom";
import {Button, Container, ThemeProvider} from "@mui/material";
import LoopIcon from '@mui/icons-material/Loop';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {newsActions} from "../../redux";
import {SingleArticle} from "../SingleArticle/SingleArticle";
import {commonHelper} from "../../helpers";
import style from './News.module.css';
import {muiServices} from "../../services";

const News: FC = () => {
    const {articles} = useAppSelector(state => state.newsReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({
        /*        title_contains: `${title_contains}`,
                summary_contains: `${summary_contains}`*/
    });
    const {pathname} = useLocation();

    useEffect(() => {
        commonHelper.moveToPageTop();
    }, [])

    useEffect(() => {
        (async () => {
            await dispatch(newsActions.getAll({
                params: {
                    // title_contains: `${query.get('title_contains')}`,
                }
            }));
        })();
    }, [dispatch, query, pathname])


    /*    useEffect(() => {
            dispatch(articleActions.saveQueryParams({
                title_contains: query.get('title_contains'),
                summary_contains: query.get('summary_contains'),
            }));
        }, [dispatch, query]);*/

    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{padding: '50px 0'}}>
                <ThemeProvider theme={muiServices.createCustomTheme()}>
                    <Button variant="contained" startIcon={<LoopIcon/>} color="secondary">
                        Load more
                    </Button>
                </ThemeProvider>

                <div className={style.articlesContainer}>
                    {
                        articles.map((article) => <SingleArticle
                            key={article.id}
                            article={article}
                            highlight={query.get('title_contains')}/>)
                    }
                </div>

            </Container>
        </React.Fragment>
    );
};

export {News};
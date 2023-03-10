import {FC, useEffect} from "react";
import React from "react";
import {Container} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {newsActions} from "../../redux";
import {commonHelper} from "../../helpers";
import style from './News.module.css';
import {ButtonLoadNews} from "../ButtonLoadNews/ButtonLoadNews";
import {ButtonScrollTop} from "../ButtonScrollTop/ButtonScrollTop";
import {SingleNews} from "../SingleNews/SingleNews";

const News: FC = () => {
    const {articles, newsPortion, numberDeletedNews} = useAppSelector(state => state.newsReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            if (articles.length !== commonHelper.getNumberAllNews(newsPortion) - numberDeletedNews) {
                await dispatch(newsActions.getAll({
                    params: {
                        _start: commonHelper.getSkippedNews(newsPortion),
                    }
                }));
            }
        })();
    }, [newsPortion])

    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{padding: '50px 0', display: 'flex', flexDirection: 'column'}}>
                <div className={style.articlesContainer}>
                    {
                        articles.map((article) => <SingleNews key={article.id} article={article}/>)
                    }
                </div>

                <ButtonLoadNews/>
                <ButtonScrollTop/>
            </Container>
        </React.Fragment>
    );
};

export {News};
import {FC, useEffect} from "react";
import React from "react";
import {useLocation, useSearchParams} from "react-router-dom";
import {Container} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {newsActions} from "../../redux";
import {SingleArticle} from "../SingleArticle/SingleArticle";
import {commonHelper} from "../../helpers";
import style from './News.module.css';
import {ButtonLoadNews} from "../ButtonLoadNews/ButtonLoadNews";

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
            <Container maxWidth="lg" sx={{padding: '50px 0', display: 'flex', flexDirection: 'column'}}>
                <div className={style.articlesContainer}>
                    {
                        articles.map((article) => <SingleArticle
                            key={article.id}
                            article={article}
                            highlight={query.get('title_contains')}/>)
                    }
                </div>

                <ButtonLoadNews/>
            </Container>
        </React.Fragment>
    );
};

export {News};
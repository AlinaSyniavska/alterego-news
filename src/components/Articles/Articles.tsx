import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {SingleArticle} from "../SingleArticle/SingleArticle";
import {useLocation, useSearchParams} from "react-router-dom";
import {commonHelper} from "../../helpers";

const Articles: FC = () => {
    const {articles} = useAppSelector(state => state.articleReducer);
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
            await dispatch(articleActions.getAllByTitle({
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
        <div className={'body'}>
            <div className={'wrap'}>
                <div className={'articlesContainer'}>
                    {
                        articles.map((article) => <SingleArticle
                            key={article.id}
                            article={article}
                            highlight={query.get('title_contains')}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export {Articles};
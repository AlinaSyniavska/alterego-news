import {axiosService, Response} from "./axios.service";
import {IArticle, IQueryParams} from "../interfaces";
import {urls} from "../constants";

const articleService = {
    getAll: (params: IQueryParams, url: string = urls.articles): Response<IArticle[]> => axiosService.get(
        url,
        {params: {...params}}
    ),
};

export {
    articleService,
}

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IArticle, IQueryParams} from "../../interfaces";
import {articleService} from "../../services";

interface IState {
    articles: IArticle[],
}

const initialState: IState = {
    articles: [],
};

const getAllByTitle = createAsyncThunk<IArticle[], { params: IQueryParams }>(
    'articleSlice/getAllByTitle',
    async ({params}, {rejectWithValue}) => {
        try {
            const {data} = await articleService.getAll(params);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);

const articleSlice = createSlice({
    name: 'articleSlice',
    initialState,
    reducers: {
        fillArticles: (state, action) => {
            state.articles = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllByTitle.fulfilled, (state, action) => {
                // state.selectedArticlesByTitle = action.payload;
            })
            .addCase(getAllByTitle.rejected, (state, action) => {
                // state.error = action.payload as any;
            })

    },
});

const {reducer: articleReducer, actions: {fillArticles}} = articleSlice;

const articleActions = {
    fillArticles,
    getAllByTitle,
};

export {
    articleActions,
    articleReducer,
}

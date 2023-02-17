import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IArticle, IQueryParams} from "../../interfaces";
import {newsService} from "../../services";

interface IState {
    articles: IArticle[],
    error: string,
}

const initialState: IState = {
    articles: [],
    error: ''
};

const getAll = createAsyncThunk<IArticle[], { params: IQueryParams }>(
    'articleSlice/getAllByTitle',
    async ({params}, {rejectWithValue}) => {
        try {
            const {data} = await newsService.getAll(params);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.articles = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload as any;
            })

    },
});

const {reducer: newsReducer, actions: {}} = newsSlice;

const newsActions = {
    getAll,
};

export {
    newsActions,
    newsReducer,
}

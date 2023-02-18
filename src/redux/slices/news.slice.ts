import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IArticle, IQueryParams} from "../../interfaces";
import {newsService} from "../../services";

interface IState {
    articles: IArticle[],
    error: string,
    newsPortion: number,
}

const initialState: IState = {
    articles: [],
    error: '',
    newsPortion: 1,
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
        setNewsPortion: (state, action) => {
            state.newsPortion = action.payload.count;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                if (state.newsPortion === 1) {
                    state.articles = action.payload;
                } else {
                    state.articles.push(...action.payload);
                }
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload as any;
            })

    },
});

const {reducer: newsReducer, actions: {setNewsPortion}} = newsSlice;

const newsActions = {
    getAll,
    setNewsPortion,
};

export {
    newsActions,
    newsReducer
}

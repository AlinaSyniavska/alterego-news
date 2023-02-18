import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IArticle, IQueryParams} from "../../interfaces";
import {newsService} from "../../services";

interface IState {
    articles: IArticle[],
    error: string,
    newsPortion: number,
    numberDeletedNews: number,
}

const initialState: IState = {
    articles: [],
    error: '',
    newsPortion: 1,
    numberDeletedNews: 0,
};

const getAll = createAsyncThunk<IArticle[], { params: IQueryParams }>(
    'newsSlice/getAll',
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
        },
        deleteOneNews: (state, action) => {
            const index = state.articles.findIndex(article => article.id === action.payload.id);
            state.articles.splice(index, 1);
            ++state.numberDeletedNews;
        },
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

const {reducer: newsReducer, actions: {deleteOneNews, setNewsPortion}} = newsSlice;

const newsActions = {
    deleteOneNews,
    getAll,
    setNewsPortion,
};

export {
    newsActions,
    newsReducer
}

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trends: null,
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend
            state.newDisney = action.payload.newDisney
            state.original = action.payload.original
            state.trends = action.payload.trends
        },
    },
})

export const { setMovies } = movieSlice.actions

export const selectRecommmend = (state) => state.movie.recommend
export const selectNewDisney = (state) => state.movie.recommend
export const selectOriginal = (state) => state.movie.original
export const selectTrends = (state) => state.movie.trends

export default movieSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imagesService from "../../services/images.service";

export const allImagesByProjectName = createAsyncThunk("images/project", async (project_name)=>{
    const res = await imagesService.getAllImagesByProjectName(project_name);
    return res;
})


const imagesSlice = createSlice({
    name: "images",
    initialState: {
        isLoading: false,
        error: "",
        images: [],
    },
    reducers: {

    }, extraReducers: (builder) => {
        builder
        .addCase(allImagesByProjectName.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(allImagesByProjectName.rejected, (state, {payload})=> {
            state.error = payload;
        })
        .addCase(allImagesByProjectName.fulfilled, (state, {payload})=> {
            state.images = payload;
        })
    }
});

export default imagesSlice.reducer;
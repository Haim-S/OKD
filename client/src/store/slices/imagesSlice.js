import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imagesService from "../../services/images.service";
import {images} from "../../data/data";

export const allImagesByProjectName = createAsyncThunk("images/project", async (project_name)=>{
    const res = await imagesService.getAllImagesByProjectName(project_name);
    return res;
})

export const createImage = createAsyncThunk("images/create", async (img_url, category, project_name) => {
    const res = await imagesService.createImages(img_url, category, project_name);
    return res;
})


const imagesSlice = createSlice({
    name: "images",
    initialState: {
        isLoading: false,
        status: false,
        error: "",
        images: images,
    },
    reducers: {
        getImagesByProjectName: (state, action) => {
            const filterImages = images.filter((img) => img.project_name === action.payload);
            state.images = filterImages;
        },

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
        .addCase(createImage.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(createImage.rejected, (state, {payload})=> {
            state.error = payload;
        })
        .addCase(createImage.fulfilled, (state, {payload})=> {
            state.status = payload.affectedRows ? true : false;
        })
    }
});

export const {getImagesByProjectName} = imagesSlice.actions;
export default imagesSlice.reducer;
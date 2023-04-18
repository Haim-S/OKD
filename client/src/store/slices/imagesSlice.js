import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imagesService from "../../services/images.service";


export const allImagesByProjectName = createAsyncThunk("images/project", async (project_name)=>{
    const res = await imagesService.getAllImagesByProjectName(project_name);
    return res;
})

export const createImage = createAsyncThunk("images/create", async (values) => {
    // console.log(project_name);
    const res = await imagesService.createImages(values.img_url, values.category, values.name_project);
    return res;
})

export const deleteImage = createAsyncThunk("images/delete", async(idImg) => {
    const res = await imagesService.deleteImages(idImg);
    return res;
})


const imagesSlice = createSlice({
    name: "images",
    initialState: {
        isLoading: false,
        status: false,
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

        .addCase(createImage.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(createImage.rejected, (state, {payload})=> {
            state.error = payload;
        })
        .addCase(createImage.fulfilled, (state, {payload})=> {
            state.status = payload ? true : false;
            console.log(payload);
        })

        .addCase(deleteImage.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(deleteImage.rejected, (state, {payload})=> {
            state.error = payload;
        })
        .addCase(deleteImage.fulfilled, (state, {payload})=> {
            state.status = payload ? true : false;
            console.log(payload);
        })
    }
});


export default imagesSlice.reducer;
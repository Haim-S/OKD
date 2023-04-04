import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import projectsService from "../../services/projects.service";


export const allProjectsByCategory = createAsyncThunk("projects/category", async (category)=>{
    const res = await projectsService.getAllProjectsByCategoryName(category);
    return res;
})





const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        isLoading: false,
        error: "",
        projects: [],
    },
    reducers: {

    },extraReducers: (builder)=> {
        builder
        .addCase(allProjectsByCategory.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(allProjectsByCategory.rejected, (state, {payload})=> {
            state.error = payload;
        })
        .addCase(allProjectsByCategory.fulfilled, (state, {payload})=> {
            state.projects = payload;
        })
    }
});

export default projectsSlice.reducer;
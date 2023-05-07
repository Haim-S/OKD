import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import projectsService from "../../services/projects.service";
import {project} from "../../data/data";


export const allProjectsByCategory = createAsyncThunk("projects/category", async (category)=>{
    const res = await projectsService.getAllProjectsByCategoryName(category);
    return res;
})

export const createNewProject = createAsyncThunk("projects/create", async(
    name_project,
    project_manager,
    name_architect,
    name_photographer,
    category,
    img_url
    )=>{

        const res = await projectsService.createProject(
            name_project,
            project_manager,
            name_architect,
            name_photographer,
            category,
            img_url);
            return res;
    })





const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        isLoading: false,
        status: false,
        error: "",
        projects: project,
    },
    reducers: {
        getProjectsByCategoryName: (state, action) => {
            const filterProject = project.filter((pro) => pro.category == action.payload.category);
            state.projects.push(filterProject);
        },

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

        .addCase(createNewProject.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(createNewProject.rejected, (state, {payload})=> {
            state.error = payload;
        })
        .addCase(createNewProject.fulfilled, (state, {payload})=> {
            state.status = payload.affectedRows ? true : false;
        })
    }
});


export const {getProjectsByCategoryName} = projectsSlice.actions;
export default projectsSlice.reducer;
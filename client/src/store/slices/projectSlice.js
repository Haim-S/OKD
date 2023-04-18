import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import projectsService from "../../services/projects.service";

export const allPtojects = createAsyncThunk("projects/all", async ()=> {
    const res = await projectsService.getAllProjects();
    return res;
})

export const allProjectsByCategory = createAsyncThunk("projects/category", async (category)=>{
    const res = await projectsService.getAllProjectsByCategoryName(category);
    return res;
})

export const createNewProject = createAsyncThunk("projects/create", async({
    name_project,
    project_manager,
    name_architect,
    name_photographer,
    category,
    img_url}
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
        projects: [],
        names_projects: [],
    },
    reducers: {
      

    },extraReducers: (builder)=> {
        builder

        .addCase(allPtojects.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(allPtojects.rejected, (state, {payload})=> {
            state.error = payload;
        })
        .addCase(allPtojects.fulfilled, (state, {payload})=> {
            state.names_projects = payload.map((project) => project.name_project);
            console.log(state.names_projects);
        })

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



export default projectsSlice.reducer;
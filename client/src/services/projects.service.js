import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/projects",
    headers: {
        "Content-Type": "aplication/json",
    },
});

const getAllProjectsByCategoryName = async (category) => {
    try {
        console.log(category);
        const response = await api.get(`/${category}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const createProject = async (
    name_project,
    project_manager,
    name_architect,
    name_photographer,
    category,
    img_src
    ) => {
    try {
        const response = await api.post({
            "name_project":name_project, 
            "project_manager":project_manager, 
            "name_architect":name_architect, 
            "name_photographer":name_photographer,
            "category": category,
            "img_src":img_src, 
        })
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const projectsService = {getAllProjectsByCategoryName, createProject};
export default projectsService;
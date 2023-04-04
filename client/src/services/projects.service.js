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

const createProject = async () => {
    try {
        
    } catch (error) {
        
    }
}

const projectsService = {getAllProjectsByCategoryName, createProject};
export default projectsService;
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        "Content-Type": "application/json"
    },
});

const getAllImagesByProjectName = async (project_name) => {
    try {
        const response = await api.get(`images/${project_name}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



const createImages = async (img_url, category, project_name) => {
    console.log(project_name);
    try {
        const response = await api.post(`images`,{
            "image_src": img_url,
            "category" : category,
            "project_name": project_name
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const deleteImages = async (idImg) => {
    try {
        const response = await api.delete(`images/${idImg}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const imagesService = {getAllImagesByProjectName, createImages, deleteImages};
export default imagesService;
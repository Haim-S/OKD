import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/images",
    headers: {
        "Content-Type": "aplication/json"
    },
});

const getAllImagesByProjectName = async (project_name) => {
    try {
        const response = await api.get(`/${project_name}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



const createImages = async (img_url, category, project_name) => {
    try {
        const response = await api.post({
            "image_src": img_url,
            "category" : category,
            "project_name": project_name
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const imagesService = {getAllImagesByProjectName, createImages};
export default imagesService;
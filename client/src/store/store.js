import {configureStore} from "@reduxjs/toolkit";
import projectsSlice  from "./slices/projectSlice";
import imagesSlice from "./slices/imagesSlice";

const store = configureStore({
 reducer: {
    projects: projectsSlice,
    images: imagesSlice,
 }
});

export default store;
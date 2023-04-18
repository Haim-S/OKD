import {configureStore} from "@reduxjs/toolkit";
import projectsSlice  from "./slices/projectSlice";
import imagesSlice from "./slices/imagesSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
 reducer: {
    auth: authSlice,
    projects: projectsSlice,
    images: imagesSlice,
 }
});

export default store;
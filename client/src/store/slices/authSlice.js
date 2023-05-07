import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import {setLocalStorageValue} from "../../utils/localStorage.util"


export const login = createAsyncThunk("auth/login", async(valus)=> {
    const res = await authService.login(valus);
 return res;
});

export const logout = createAsyncThunk("auth/logout", async(token)=> {
    const res = await authService.logout(token);
    return res;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        error: "",
        data: []
    },
    reducers: {

    },extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state)=> {
            state.isAuth = false;
        })
        .addCase(login.rejected, (state, action)=> {
            state.isAuth = false;
            state.error = action.payload;
        })
        .addCase(login.fulfilled, (state, action)=> {
            state.isAuth = true;
            state.data = action.payload;
            console.log(state.data[0].jwt_ac_token);
            setLocalStorageValue("ac_token", state.data[0].jwt_ac_token);
        })


        .addCase(logout.pending, (state)=> {
            state.isAuth = true;
        })
        .addCase(logout.rejected, (state, {payload})=> {
            state.error = payload;
        })
        .addCase(logout.fulfilled, (state, {payload})=> {
            state.isAuth = false;
            state.data = payload ;
            console.log(state.data);
        })
    }
});

export default authSlice.reducer;

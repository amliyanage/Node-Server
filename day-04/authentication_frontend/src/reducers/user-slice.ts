import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {User} from "../User.ts";

export const initialState = '';

const authenticateUser= createAsyncThunk(
    'user/authenticate',
    async (user : User)=>{
        try{
            return user;
        }catch(err){
            console.log(err);
        }
    }
)

const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(authenticateUser.fulfilled,(req,res)=>{
                console.log('Hello World')
            })
    }
});

export default userSlice.reducer;
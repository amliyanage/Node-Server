import {Customer} from "../models/Customer";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState : Customer[] = [];

const api = axios.create({
    baseURL : "http://localhost:3000/customer"
})

export const saveCustomer = createAsyncThunk(
    'customer/saveCustomer',
    async (customer: Customer) => {
        try {
            const response = await api.post('/add', customer);
            return response.data;
        } catch (error) {
            return console.log('error',error)
        }
    }
);

export const getCustomers = createAsyncThunk(
    'customer/getCustomers',
    async ()=>{
        try{
            const response = await api.get('/view');
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
);

export const deleteCustomer = createAsyncThunk(
    'customer/deleteCustomer',
    async (email: string) => {
        try {
            const response = await api.delete('/delete/${email}');
            return response.data;
        } catch (error) {
            console.log('error',error)
        }
    }
);

export const updateCustomer = createAsyncThunk(
    'customer/updateCustomer',
    async (customer: Customer) => {
        try {
            const response = await api.put('/update/${customer.email}', customer);
            return response.data;
        } catch (error) {
            console.log('error', error);
        }
    }
);


const customerSlice = createSlice({
    name : 'customer',
    initialState,
    reducers:{
        addCustomer(state, action:PayloadAction<Customer>){
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCustomer.fulfilled, (state, action) => {
                state.push(action.payload);
                alert("customer saved successfully");
                console.log(action.payload)
            })
            .addCase(saveCustomer.rejected, (state, action) => {
                console.error("failed to save customer:", action.payload);
            })
            .addCase(saveCustomer.pending, (state, action) => {
                console.error("save customer pending");
            });
        builder
            .addCase(getCustomers.fulfilled, (state, action) => {
                action.payload.map((customer:Customer) => {
                    state.push(customer);
                })
            })
            .addCase(getCustomers.pending, (state, action) => {
                console.log("pending get customer:", action.payload);
            })
            .addCase(getCustomers.rejected, (state, action) => {
                console.error("failed to save customer:", action.payload);
            });
        builder
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                return state.filter((customer: Customer) => customer.email === action.payload.email);
            })
            .addCase(deleteCustomer.rejected, (state, action) => {
                console.error("failed to delete customer:", action.payload);
            })
            .addCase(deleteCustomer.pending, (state, action) => {
                console.log("pending delete customer:", action.payload);
            });
        builder
            .addCase(updateCustomer.fulfilled, (state, action) => {
                const index = state.findIndex((customer: Customer) => customer.email === action.payload.email);
                state[index] = action.payload;
                alert("customer updated successfully");
            })
            .addCase(updateCustomer.rejected, (state, action) => {
                console.error("failed to update customer:", action.payload);
            })
            .addCase(updateCustomer.pending, (state, action) => {
                console.log("pending update customer:", action.payload);
            });
    }
});

export const {addCustomer}  = customerSlice.actions;
export default customerSlice.reducer;